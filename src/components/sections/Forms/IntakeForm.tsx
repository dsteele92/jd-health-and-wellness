import React, { useState, useRef } from 'react';
import { TextInput, SegmentedControl, Checkbox, Text, Flex, Stack, Button, Select, ComboboxItem } from '@mantine/core';
import SignatureCanvas from 'react-signature-canvas';

export const IntakeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maritalStatus, setMaritalStatus] = useState<ComboboxItem | null>(null);
  const [akas, setAkas] = useState('');
  const [dob, setDob] = useState('');
  const [ssn, setSsn] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
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
    <form onSubmit={handleFormSubmit} style={{padding: '0 1rem', width: '100%'}}>
      <Flex direction='column' align='flex-start' gap='sm'>
        {/* <Text size='xl'>Intake Form</Text> */}
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
              />
              <TextInput
                label="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
          </Flex>
              <Flex gap='md' wrap='wrap'>
                <TextInput
                  label="Maiden Name"
                  value={maidenName}
                  onChange={(event) => setMaidenName(event.target.value)}
                />
                    <Select
                      data={[
                        { value: 'Married', label: 'Married' },
                        { value: 'Single, never married', label: 'Single, never married' },
                        { value: 'Single, divorced', label: 'Single, divorced' },
                        { value: 'Married, separated', label: 'Married, separated' },
                        { value: 'Widowed', label: 'Widowed' },
                        { value: 'Living as married', label: 'Living as married' },
                        { value: 'Other', label: 'Other' },
                      ]}
                      label="Marital Status"
                      value={maritalStatus ? maritalStatus.value : null}
                      onChange={(_value, option) => setMaritalStatus(option)}
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