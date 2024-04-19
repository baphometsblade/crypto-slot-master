import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch("https://a.picoapps.xyz/aero/api/could-rich", {
      method: "GET",
      headers: {
        Authorization: "Bearer your-token-here",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  return (
    <Box p={4} bg="gray.100">
      {profileData ? <Text fontSize="xl">Welcome, {profileData.name}</Text> : <Text fontSize="xl">Loading profile...</Text>}
    </Box>
  );
}

export default Profile;
