import React, { useState } from "react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [data, setData] = useState([]);
  const toast = useToast();

  const handleChange = (e) => {
    setData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const SERVICE_ID = "service_5rpsbxf";
  const TEMPLATE_ID = "template_xpxfwsm";
  const PUBLIC_ID = "qAk0XKrEJszSf2ro_";

  const handleSubmit = () => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_ID)
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => {
        console.log(err);
      });
    toast({
      title: "Message sent successfully 👍",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Center
        w={"95vw"}
        ml={"auto"}
        mr={"auto"}
        bgColor={"whiteAlpha.900"}
        pb={"24"}
        pt={"24"}
        borderRadius={"3xl"}
        mb={"24"}
      >
        <VStack gap={5}>
          <Heading>Send your Message</Heading>
          <FormControl>
            <FormLabel>Name : </FormLabel>
            <Input
              type={"text"}
              border={"2px solid black"}
              placeholder={"Enter your Name"}
              name={"from_name"}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email : </FormLabel>
            <Input
              type={"email"}
              placeholder={"Enter your Email"}
              name={"from_email"}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Feedback : </FormLabel>
            <Textarea
              cols={5}
              rows={7}
              placeholder={"Enter your Message"}
              name={"message"}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <Button
            size={"lg"}
            type={"submit"}
            bgColor={"blue.100"}
            w={"full"}
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </VStack>
      </Center>
    </>
  );
};

export default ContactForm;
