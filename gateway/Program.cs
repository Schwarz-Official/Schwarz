var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient("Fusion");

builder.Services
    .AddFusionGatewayServer()
    .ConfigureFromFile("./gateway.fgp");

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
            .AllowCredentials()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors();

app.MapGraphQL();

app.RunWithGraphQLCommands(args);
