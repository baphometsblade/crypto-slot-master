import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function Settings() {
  const [settings, setSettings] = useState({ theme: "dark" });

  const saveSettings = () => {
    fetch("https://api.example.com/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-token-here",
      },
      body: JSON.stringify(settings),
    })
      .then((response) => response.json())
      .then((data) => console.log("Settings saved:", data))
      .catch((error) => console.error("Error saving settings:", error));
  };

  return (
    <Box p={4} bg="gray.100">
      <Text fontSize="xl">Settings</Text>
      <Button onClick={saveSettings}>Save Settings</Button>
    </Box>
  );
}

export default Settings;
