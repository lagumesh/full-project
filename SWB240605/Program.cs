using Microsoft.Extensions.DependencyInjection.Extensions;
using SWB240605.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMvc().AddSessionStateTempDataProvider();
builder.Services.AddSession();

builder.Services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

builder.Services.AddTransient<IApplicantService, ApplicantService>();
builder.Services.AddTransient<ICategoryService, CategoryService>();
builder.Services.AddTransient<IDistrictService, DistrictService>();
builder.Services.AddTransient<IGenderService, GenderService>();
builder.Services.AddTransient<IIdentityCardTypeService, IdentityCardTypeService>();
builder.Services.AddTransient<IPostService, PostService>();
builder.Services.AddTransient<IPostUnitService, PostUnitService>();
builder.Services.AddTransient<IPostUnitQualificationService, PostUnitQualificationService>();
builder.Services.AddTransient<IQualificationBoardService, QualificationBoardService>();
builder.Services.AddTransient<IUnionStateTerritoryService, UnionStateTerritoryService>();
builder.Services.AddTransient<IVisitorService, VisitorService>();
builder.Services.AddTransient<IKannadaStudiedModeService, KannadaStudiedModeService>();
builder.Services.AddTransient<IUserService, UserService>();

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();
app.UseSession();

app.MapRazorPages();

app.Run();
