var MyAllowSpecificOrigins = "_AllowFrontendOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient("Fusion");

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials();
        });
});

// Register your custom scalars
builder.Services
    .AddGraphQLServer()
    .AddType<GenericScalarType>();

builder.Services
    .AddFusionGatewayServer()
    .ConfigureFromFile("./gateway.fgp");

var app = builder.Build();

// Use the CORS middleware
app.UseCors(MyAllowSpecificOrigins);

// Map the GraphQL endpoint
app.MapGraphQL();

app.RunWithGraphQLCommands(args);
