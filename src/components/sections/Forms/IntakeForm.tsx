import React, { useState, useRef } from 'react';
import { TextInput, SegmentedControl, Checkbox, Box, Text, Flex, Stack, Group, Button } from '@mantine/core';
import SignatureCanvas from 'react-signature-canvas';

export const IntakeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [race, setRace] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [hasAllergies, setHasAllergies] = useState(false);
  const [hasMedicalCondition, setHasMedicalCondition] = useState(false);

  const sigCanvas = useRef({});

  const handleSignatureClear = () => {
    sigCanvas.current.clear();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send data to backend or perform any other actions
    console.log({
      phoneNumber,
      gender,
      race,
      otherInfo,
      hasAllergies,
      hasMedicalCondition,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} style={{padding: '0 1rem'}}>
      <Flex direction='column' align='flex-start' gap='sm'>
        <Text size='xl'>Intake Form</Text>
          <Flex gap='md' wrap='wrap'>
              <TextInput
                label="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <TextInput
                label="Middle Name"
                value={middleName}
                onChange={(event) => setMiddleName(event.target.value)}
                required
              />
              <TextInput
                label="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
          </Flex>
          <TextInput
            label="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
            type="tel"
          />
          <SegmentedControl
          size='sm'
            value={gender}
            onChange={setGender}
            data={['male', 'female', 'other']}
          />
          <TextInput
            label="Race"
            value={race}
            onChange={(event) => setRace(event.target.value)}
          />
          <TextInput
            label="Other Information"
            value={otherInfo}
            onChange={(event) => setOtherInfo(event.target.value)}
          />
          <Checkbox
            label="Do you have any allergies?"
            checked={hasAllergies}
            onChange={(event) => setHasAllergies(event.target.checked)}
          />
          <Checkbox
            label="Do you have any medical conditions?"
            checked={hasMedicalCondition}
            onChange={(event) => setHasMedicalCondition(event.target.checked)}
          />
            <Stack gap='xs'>
                <Text component="label">
                    Signature:
                </Text>
                <div style={{border: '1px solid lightgray', borderRadius: '5px', padding: '0.5rem'}}>
                    <SignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{ width: 300, height: 150, className: 'signatureCanvas'}}
                    />
                </div>
                <Button onClick={handleSignatureClear} color='grey'>Clear Signature</Button>
            </Stack>
          <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};