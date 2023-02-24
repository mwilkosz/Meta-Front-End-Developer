import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor="white" rounded="lg" shadow="md" alignItems="left">
      <Image src={imageSrc} alt={title} rounded="lg"/>
      <Heading as="h2" size="md" color='black' padding={2}>{title}</Heading>
      <Text color='black' padding={2}>{description}</Text>
      <HStack mt={2}>
        <Text color='black' padding={2}>Learn more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </HStack>
    </VStack>
  );
}

export default Card;
