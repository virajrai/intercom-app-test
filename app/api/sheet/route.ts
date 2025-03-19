/**
 * @required INKEEP_API_KEY - The API key for Inkeep
 * @required INKEEP_INTEGRATION_ID - The integration ID for Inkeep
 * @required INKEEP_ORGANIZATION_ID - The organization ID for Inkeep
 * @required INKEEP_ORGANIZATION_DISPLAY_NAME - The organization's display name (defaults to "Your Organization Name")
 * @required INKEEP_PRIMARY_BRAND_COLOR - The brand's primary color (defaults to "#26D6FF")
 */

// Default values for optional environment variables
const organizationDisplayName = process.env.INKEEP_ORGANIZATION_DISPLAY_NAME || "Your Organization Name";
const primaryBrandColor = process.env.INKEEP_PRIMARY_BRAND_COLOR || "#26D6FF";

const response = `<!doctype html>
<html lang="en" style="height: 100%">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Open Sheet</title>
    <script
      id="inkeep-script"
      src="https://unpkg.com/@inkeep/widgets-embed@0.2.277/dist/embed.js"
      type="module"
      defer
    ></script>
    <script type="module" defer>
      console.log("running inkeep embed script");
    </script>
  </head>
  <body style="margin: 0px; height: 100%; display: flex; align-items: center; justify-content: center;">
    <h1>Hi Viraj</h1>
  </body>
</html>
`;

export async function POST() {
	return new Response(response, {
		status: 200,
		headers: { "content-type": "text/html; charset=utf-8" },
	});
}
