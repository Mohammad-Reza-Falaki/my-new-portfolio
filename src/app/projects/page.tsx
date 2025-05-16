import Link from "next/link";

import CodeBlock from "../../../public/components/codeblock";

const projects = [
  {
    name: "Python Project 1",
    description: "Description of Python project",
    code: `const greet = (name) => {
    return \`Hello, \${name}!\`;
  };`,
    link: "#",
  },
  {
    name: "Matlab Project",
    description: "PDE_Temperature_Distribution_Simulation",
    code: `clear all;
clc;

% Parameters
L = 0.762; % Length of the ingot (m)
N = 80; % Number of grid points
dx = L / (N-1); % Grid spacing
dy = dx;

k = 30; % Thermal conductivity (W/m.K)
c = 750; % Specific heat (J/kg.K)
rho = 7200; % Density (kg/m^3)
alpha = k / (rho * c); % Thermal diffusivity (m^2/s)

% Time step for explicit method
dt = 0.5; % Time step (s)
total_time = 13000; % Total simulation time (s)
time_steps = total_time / dt; % Number of time steps

T_ini = 1535; % Initial temperature (C)
T_wall = 1150; % Boundary temperature (C)
T_m = 1500; % Melting temperature (C)
T_L = T_m + 1; % Liquidus temperature (C)
T_S = T_m - 1; % Solidus temperature (C)
L_f = 262.5 * 1000; % Latent heat (J/kg)

% Initialization
T = T_ini * ones(N, N); % Initial temperature distribution
T_new = T; % Temperature for next time step

% Arrays to store temperature history and solid fraction
temp_history = zeros(1, time_steps);
solid_fraction = zeros(1, time_steps);

% Time stepping loop
for n = 1:time_steps
    for i = 2:N-1
        for j = 2:N-1
            % Calculate effective heat capacity
            Cp_eff = c;
            if T(i,j) > T_S && T(i,j) < T_L
                Cp_eff = c + (L_f / (T_L - T_S));
            end
            
            % Update temperature using explicit method
            T_new(i,j) = T(i,j) + (dt / (rho * Cp_eff)) * ( ...
                k * (T(i+1,j) - 2*T(i,j) + T(i-1,j)) / dx^2 + ...
                k * (T(i,j+1) - 2*T(i,j) + T(i,j-1)) / dy^2 );
        end
    end
    
    % Apply boundary conditions
    T_new(1,:) = T_wall;
    T_new(N,:) = T_wall;
    T_new(:,1) = T_wall;
    T_new(:,N) = T_wall;
    
    % Update temperature array
    T = T_new;
    
    % Store temperature history at the center of the domain
    temp_history(n) = T(round(N/2), round(N/2));
    
    % Calculate solid fraction for the entire domain
    G = zeros(N, N);
    for i = 1:N
        for j = 1:N
            if T(i,j) < T_m
                G(i,j) = 1; % Solid
            else
                G(i,j) = 0; % Liquid
            end
        end
    end
    solid_fraction(n) = sum(G(:)) / (N * N);
    
    % Plot temperature distribution at specified intervals
    if mod(n, 1000 / dt) == 0
        figure;
        contourf(T, 20, 'LineColor', 'none');
        colorbar;
        title(['Temperature distribution at t = ' num2str(n*dt) ' s']);
        xlabel('x');
        ylabel('y');
    end
end

% Plot temperature history
time = linspace(0, total_time, time_steps);
figure;
plot(time, temp_history);
xlabel('Time (s)');
ylabel('Temperature (C)');
title('Temperature history at the center of the domain');

% Plot solid fraction evolution
figure;
plot(time, solid_fraction);
xlabel('Time (s)');
ylabel('Solid Fraction');
title('Solid fraction evolution');`,
    link: "#",
  },
  {
    name: "MD Script",
    description: "Description of MD script",
    code: `const greet = (name) => {
      return \`Hello, \${name}!\`;
    };`,
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl mb-4">My Projects</h1>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl">{project.name}</h2>
            <p>{project.description}</p>
            <CodeBlock code={project.code} language="typescript" />
            <Link href={project.link}>
              <button className="text-blue-500">View Project</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
