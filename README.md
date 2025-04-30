# Setup

1. Install Docker Desktop at https://www.docker.com/. Skip sign-up step.
2. Nevigate to your hosts file
    - On MacOS this will likely be in `/etc/`
    - On Windows this will likely be at `C:\Windows\System32\drivers\etc`
3. Open the `hosts` file as **admin or sudo** and append the below **Hosts** information to your file. Leave what is already there or any additions you have previously made.
4. In the repo folder, run `docker compsose up --build` to build and run the container.
5. In your browser, navigate to `https://sterbcroyalbank.localdev/` to confirm setup.

You can make changes to the "sites" folder as you would DMZ, with the same site root of "htdocs". Make changes to the `\sites\rb_wwws\htdocs\index.html` folder to reflect changes at `https://sterbcroyalbank.localdev/`. You can copy DVL into the htdocs folder and use the server-side includes as you would normally on Bronze. HTTP points to the *www* folders and HTTPS to the *wwws* folders.

# Hosts

```
127.0.0.1 rb.localdev
127.0.0.1 sterbc.localdev
127.0.0.1 sterbcassurances.localdev
127.0.0.1 sterbcbank.localdev
127.0.0.1 sterbcbanqueroyale.localdev
127.0.0.1 sterbcdirectinvesting.localdev
127.0.0.1 sterbcfinancialplanning.localdev
127.0.0.1 sterbcinsurance.localdev
127.0.0.1 sterbcphnic.localdev
127.0.0.1 sterbcplacementsendirect.localdev
127.0.0.1 sterbcroyalbank.localdev
127.0.0.1 steavionrewards.localdev
127.0.0.1 sterbc.localdev
127.0.0.1 sterbcassurances.localdev
127.0.0.1 sterbcbank.localdev
127.0.0.1 sterbcbanqueroyale.localdev
127.0.0.1 sterbcdirectinvesting.localdev
127.0.0.1 sterbcfinancialplanning.localdev
127.0.0.1 sterbcinsurance.localdev
127.0.0.1 sterbcinvestease.localdev
127.0.0.1 sterbcplacementsendirect.localdev
127.0.0.1 sterbcroyalbank.localdev
127.0.0.1 stercapleasing.localdev
127.0.0.1 www6.steroyalbank.localdev
```

# Run

`docker compose up --build` 
