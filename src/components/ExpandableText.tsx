import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  return (
    <>
      <Text>
        {expanded ? children : children.substring(0, limit) + "..."}
        <Button
          marginLeft={1}
          fontWeight="bold"
          size="xs"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};
