import React from "react";
import {
    Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <>
      <form action="#" method="post">
        <Center w={"95vw"} ml={"auto"} mr={"auto"} bgColor={"whiteAlpha.900"} pb={"24"} pt={"24"} borderRadius={"3xl"} mb={"24"} >
          <VStack gap={5}>
            <Heading>Send your Message</Heading>
            <FormControl>
              <FormLabel>Name : </FormLabel>
              <Input
                type={"text"}
                border={"2px solid black"}
                placeholder={"Enter your Name"}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email : </FormLabel>
              <Input type={"text"} placeholder={"Enter your Email"} />
            </FormControl>
            <FormControl>
              <FormLabel>Feedback : </FormLabel>
              <Textarea cols={5} rows={7} placeholder={"Enter your Message"} />
            </FormControl>
            <Button size={"lg"} type={"submit"} bgColor={"blue.100"} w={"full"} >Send Message</Button>
          </VStack>
        </Center>
      </form>
    </>
  );
};

export default ContactForm;
