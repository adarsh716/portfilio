import Navbar from "@/views/navbar";
import Footer from "@/views/footer";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <>
      <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: "#0d101e",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        className="background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(45deg, rgba(92, 6, 179, 0.3) 25%, transparent 25%, transparent 50%, rgba(92, 6, 179, 0.3) 50%, rgba(92, 6, 179, 0.3) 75%, transparent 75%, transparent)",
          backgroundSize: "100px 100px",
          zIndex: -1,
        }}
      ></Box>
      <Navbar />
      <Box sx={{ mt: "100px" }}>
      <div>{children}</div>
      </Box>
      <Footer />
    </Box>
    </>
    </>
  );
}
