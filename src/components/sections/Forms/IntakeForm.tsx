import React, { useState, useRef } from 'react';
import { TextInput, SegmentedControl, Checkbox, Text, Flex, Stack, Button, Select, ComboboxItem } from '@mantine/core';
import SignatureCanvas from 'react-signature-canvas';

export const IntakeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [maritalStatus, setMaritalStatus] = useState<ComboboxItem | null>(null);
  const [akas, setAkas] = useState('');
  const [dob, setDob] = useState('');
  // const [ssn, setSsn] = useState('');
  // const [address, setAddress] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [gender, setGender] = useState('');
  const [pregnant, setPregnant] = useState('');
  // const [veteran, setVeteran] = useState('');

  const [race, setRace] = useState('');
  // const [height, setHeight] = useState('');
  // const [weight, setWeight] = useState('');
  // const [hairColor, setHairColor] = useState('');
  // const [eyeColor, setEyeColor] = useState('');
  // const [highestGradeLevelCompleted, setHighestGradeLevelCompleted] = useState('');

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
            label="AKA's"
            value={akas}
            onChange={(event) => setAkas(event.target.value)}
          />
          <TextInput
            label="Date of Birth"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            required
            type="date"
          />
          <Flex gap='md' wrap='wrap'>
            <Stack>
              <Text size='sm'>Gender</Text>
              <SegmentedControl
                size='sm'
                value={gender}
                onChange={setGender}
                data={['Male', 'Female', 'Other']}
              />
            </Stack>
            <Stack>
              <Text size='sm'>Are you pregnant?</Text>
              <SegmentedControl
                size='sm'
                value={pregnant}
                onChange={setPregnant}
                data={['Yes', 'No', 'N/A']}
              />
            </Stack>
          </Flex>
          <Flex gap='md' wrap='wrap'>
            <TextInput
              label="Home Phone"
              value={homePhone}
              onChange={(event) => setHomePhone(event.target.value)}
              type="tel"
            />
            <TextInput
              label="Cell Phone"
              value={cellPhone}
              onChange={(event) => setCellPhone(event.target.value)}
              type="tel"
            />
          </Flex>
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