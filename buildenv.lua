-- Function to run shell commands asynchronously (in the background)
function runAsync(cmd)
    if package.config:sub(1,1) == '\\' then
        -- Windows specific
        cmd = "start /B " .. cmd
    else
        -- Unix-based OS (Linux/Mac)
        cmd = cmd .. " &"
    end
    return os.execute(cmd)
end

-- Cross-platform sleep function
function sleep(n)
    if package.config:sub(1,1) == '\\' then
        -- Windows specific
        os.execute("timeout /T " .. tonumber(n) .. " >nul")
    else
        -- Unix-based OS (Linux/Mac)
        os.execute("sleep " .. tonumber(n))
    end
end

-- Cross-platform function to stop a process by TCP port
function stopProcessByPort(port)
    if package.config:sub(1,1) == '\\' then
        -- Windows specific
        os.execute("for /f \"tokens=5\" %a in ('netstat -aon ^| findstr :" .. port .. "') do taskkill /f /pid %a")
    else
        -- Unix-based OS (Linux/Mac)
        os.execute("kill -9 $(lsof -t -i:" .. port .. ")")
    end
end


-- Function to start a Django server asynchronously
function startDjangoServer(svc_name)
    print("Starting " .. svc_name .. " microservice...")

    -- Construct the full path to manage.py
    local manage_py_path = "backend/" .. svc_name .. "/manage.py"
    local command = 'python "' .. manage_py_path .. '" runserver'

    local result = runAsync(command)

    if result == 0 then
        print(svc_name .. " server started successfully.")
        return true
    else
        print("Failed to start " .. svc_name .. " server.")
        return false
    end
end

-- Function to stop a Django server
function stopDjangoServer(port)
    local result = stopProcessByPort(port)

    if result == 0 then
        return true
    else
        print("Failed to stop Django server.")
        return false
    end
end


-- Function to generate .graphql file from Django GraphQL Schema with retry mechanism
function generateGraphQLSchema(url, output_path)
    print("Waiting for server to be ready...")

    -- Retry every 5 seconds until the server is running
    local max_retries = 12 -- Retry for 1 minute (12 * 5 seconds)
    local retries = 0

    while retries < max_retries do
        print("Server is up. Generating .graphql file from URL: " .. url)
        local command = "get-graphql-schema " .. url .. " > " .. output_path
        local result = os.execute(command)

        if result == 0 then
            print(".graphql file generated successfully at " .. output_path)
            return true
        else
            print("Failed to generate .graphql file at " .. output_path)
            return false
        end
    end

    print("Server did not start within the expected time. Failed to generate .graphql file.")
    return false
end

-- Function to handle backend setup, including starting the server and generating the GraphQL schema
function handleBackendSetup(svc_name, graphql_url, output_path, port)
    local server_started = startDjangoServer(svc_name)

    if server_started then
        generateGraphQLSchema(graphql_url, output_path)
    else
        print("Failed to start the server. Skipping GraphQL schema generation.")
    end

    stopDjangoServer(port)
end

-- Function to build the frontend
function buildFrontend()
    print("Building frontend...")
    local result = os.execute("cd frontend && npm install")

    if result == 0 then
        print("npm install successful")
    else
        print("npm install failed")
    end
end

-- Function to build the backend with nested coroutines for each server
function buildBackend()
    handleBackendSetup(
        "auth",
        "http://localhost:8000/graphql",
        "./backend/auth/schema.graphql",
        8000
    )
end

-- Create coroutines for frontend and backend
frontend_coroutine = coroutine.create(buildFrontend)
backend_coroutine = coroutine.create(buildBackend)

-- Main function to manage the coroutines
local function main()
    while coroutine.status(frontend_coroutine) ~= "dead" or coroutine.status(backend_coroutine) ~= "dead" do
        if coroutine.status(frontend_coroutine) ~= "dead" then
            coroutine.resume(frontend_coroutine)
        end
        if coroutine.status(backend_coroutine) ~= "dead" then
            coroutine.resume(backend_coroutine)
        end
    end
end

-- Run the main function
main()
