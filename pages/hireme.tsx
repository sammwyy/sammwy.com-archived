import { Box, Heading, Text, UnorderedList } from '@chakra-ui/react';

export default function HireMe() {
  return (
    <Box>
      <Heading size={'xl'}>Hire me</Heading>
      <Text>
        Do you want to hire my services as a freelancer? I can make you a
        Minecraft plugin/mod, website or software for your company. Contact me
        on <b>Discord</b> or <b>Twitter</b> with a brief summary of the project
        followed by a list of key details to consider in a word document (docx)
        or pdf. For example:
      </Text>

      <Heading color={'gray.500'} margin={'20px 0'} size={'md'}>
        Project Name
      </Heading>
      <Text color={'gray.500'}>
        Hello, I want a __________ software that allows me to do __________.
        This must be customizable, configurable and translatable. This is a list
        of features that the project needs to have:
      </Text>
      <UnorderedList color={'gray.500'} margin={'10px'} paddingLeft={'25px'}>
        <li>Feature #1</li>
        <li>Feature #2</li>
        <li>Feature #3</li>
        <li>Feature #4</li>
        <li>Feature #5</li>
      </UnorderedList>
      <Text color={'gray.500'}>
        This should be completed by __________ date. The project is inspired by
        _________ which you can use to get references.
      </Text>
      <Text marginTop={'20px'}>
        With all the details explained I can calculate a price estimate and a
        delivery date.
      </Text>
      <Text color={'orange'}>
        Half of the money must be delivered before the commission begins and the
        other half at the end.
      </Text>
      <Text color={'red'}>
        I will not issue a refund unless the software is not working and I
        cannot get it to work.
      </Text>
    </Box>
  );
}
