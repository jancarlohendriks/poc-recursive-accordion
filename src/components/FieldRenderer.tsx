import React from "react";
import { Typography, Box } from "@mui/material";
import type { FieldData } from "../types";
import { getFieldValue } from "../utils";

interface FieldRendererProps {
  field: FieldData;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field }) => {
  const value = getFieldValue(field);

  if (!value) return null;

  return (
    <Box sx={{ mb: 1, p: 1, bgcolor: "grey.50", borderRadius: 1 }}>
      <Typography variant="body2" color="text.secondary">
        {field.names[0] || "Field"}:
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};

export default FieldRenderer;
