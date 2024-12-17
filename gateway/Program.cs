var MyAllowSpecificOrigins = "_AllowFrontendOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient("Fusion");

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000");
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

app.MapGraphQL();

app.RunWithGraphQLCommands(args);
