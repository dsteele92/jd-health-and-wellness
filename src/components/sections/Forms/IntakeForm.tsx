import React, { useState, useRef } from 'react';
import { TextInput, SegmentedControl, Checkbox, Text, Flex, Stack, Button, Select } from '@mantine/core';
import SignatureCanvas from 'react-signature-canvas';

export const IntakeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [akas, setAkas] = useState('');
  const [dob, setDob] = useState('');
  const [ssn, setSsn] = useState('');
  const [address, setAddress] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [gender, setGender] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [veteran, setVeteran] = useState('');
  const [race, setRace] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [homeless, setHomeless] = useState();
  const [enrolledInSchool, setEnrolledInSchool] = useState();
  const [employed, setEmployed] = useState();
  const [seekingWork, setSeekingWork] = useState();
  const [workHours, setWorkHours] = useState('');
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState('');
  const [employment, setEmployment] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [dependents, setDependents] = useState('');
  const [personalMedicalHistory, setPersonalMedicalHistory] = useState('');
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState('');
  const [surgeries, setSurgeries] = useState('');
  const [householdIncomeSource, setHouseholdIncomeSource] = useState('');
  const [employabilityFactor, setEmployabilityFactor] = useState('');
  const [healthInsurance, setHealthInsurance] = useState('');
  const [livingArrangement, setLivingArrangement] = useState('');
  const [primaryInsurance, setPrimaryInsurance] = useState('');
  const [primaryInsurancePhone, setPrimaryInsurancePhone] = useState('');
  const [primaryInsuranceGroup, setPrimaryInsuranceGroup] = useState('');
  const [primaryInsuranceID, setPrimaryInsuranceID] = useState('');
  const [secondaryInsurance, setSecondaryInsurance] = useState('');
  const [secondaryInsurancePhone, setSecondaryInsurancePhone] = useState('');
  const [secondaryInsuranceGroup, setSecondaryInsuranceGroup] = useState('');
  const [secondaryInsuranceID, setSecondaryInsuranceID] = useState('');
  const [secondaryInsuredName, setSecondaryInsuredName] = useState('');
  const [secondaryInsuredDOB, setSecondaryInsuredDOB] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('');
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [emergencyContactVoicemail, setEmergencyContactVoicemail] = useState();
  const [authorizedToSchedule, setAuthorizedToSchedule] = useState();
  const [authorizedPersonName, setAuthorizedPersonName] = useState('');
  const [authorizedPersonDOB, setAuthorizedPersonDOB] = useState('');
  const [authorizedToDiscussTreatment, setAuthorizedToDiscussTreatment] = useState();
  const [authorizedToPayBenefits, setAuthorizedToPayBenefits] = useState();
  const [mainReasonForVisit, setMainReasonForVisit] = useState('');
  const [otherConcerns, setOtherConcerns] = useState('');
  const [healthGoals, setHealthGoals] = useState('');
  const [previousCare, setPreviousCare] = useState('');
  const [medications, setMedications] = useState('');
  const [medicationAllergies, setMedicationAllergies] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [hasAllergies, setHasAllergies] = useState();
  const [hasMedicalCondition, setHasMedicalCondition] = useState();

  const sigCanvas = useRef({});

  const handleSignatureClear = () => {
    (sigCanvas.current).clear();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      data: {
        firstName,
        middleName,
        lastName,
        maidenName,
        maritalStatus,
        akas,
        dob,
        ssn,
        address,
        homePhone,
        cellPhone,
        gender,
        pregnant,
        veteran,
        race,
        hairColor,
        gradeLevel,
        homeless,
        enrolledInSchool,
        employed,
        seekingWork,
        workHours,
        grossMonthlyIncome,
        employment,
        jobTitle,
        dependents,
        personalMedicalHistory,
        familyMedicalHistory,
        surgeries,
        householdIncomeSource,
        employabilityFactor,
        healthInsurance,
        livingArrangement,
        primaryInsurance,
        primaryInsurancePhone,
        primaryInsuranceGroup,
        primaryInsuranceID,
        secondaryInsurance,
        secondaryInsurancePhone,
        secondaryInsuranceGroup,
        secondaryInsuranceID,
        secondaryInsuredName,
        secondaryInsuredDOB,
        emergencyContactName,
        emergencyContactRelationship,
        emergencyContactAddress,
        emergencyContactPhone,
        emergencyContactVoicemail,
        authorizedToSchedule,
        authorizedPersonName,
        authorizedPersonDOB,
        authorizedToDiscussTreatment,
        authorizedToPayBenefits,
        mainReasonForVisit,
        otherConcerns,
        healthGoals,
        previousCare,
        medications,
        medicationAllergies,
        otherInfo,
        hasAllergies,
        hasMedicalCondition
      },
      formType: 'Patient',
    };

    try {
			const response = await fetch('https://s4eyymdmr27o3uobyos62uduea0hlhhi.lambda-url.us-west-2.on.aws/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();
			if (response.ok) {
				console.log('Response Data:', data);
				alert('Form submitted successfully!'); // Show success message
			}
		} catch (error) {
			console.error('Failed to submit the form:', error);
			alert('Failed to submit the form.'); // Show error message
		}
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ padding: '0 1rem', width: '100%' }}>
      <Flex direction='column' align='flex-start' gap='md'>

        {/* Personal Information */}
        <Flex direction='column' gap='sm'>
          <Text size='xl'>Personal Information</Text>
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
              value={maritalStatus ? maritalStatus : ''}
              onChange={(value) => setMaritalStatus(value || '')}
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
          <TextInput
            label="Social Security Number"
            value={ssn}
            onChange={(event) => setSsn(event.target.value)}
          />
        </Flex>

        {/* Contact Information */}
        <Flex direction='column' gap='sm'>
          <Text size='xl'>Contact Information</Text>
          <TextInput
            label="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
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
        </Flex>

        {/* Employment Information */}
        <Flex direction='column' gap='sm'>
          <Text size='xl'>Employment Information</Text>
          <Checkbox
            label="Are you currently employed?"
            checked={employed}
            onChange={(event) => setEmployed(event.target.checked)}
          />
          <Checkbox
            label="If no, are you currently seeking work?"
            checked={seekingWork}
            onChange={(event) => setSeekingWork(event.target.checked)}
          />
          <TextInput
            label="If yes, how much do you work?"
            value={workHours}
            onChange={(event) => setWorkHours(event.target.value)}
          />
          <TextInput
            label="Gross Monthly Income"
            value={grossMonthlyIncome}
            onChange={(event) => setGrossMonthlyIncome(event.target.value)}
          />
          <TextInput
            label="Employment"
            value={employment}
            onChange={(event) => setEmployment(event.target.value)}
          />
          <TextInput
            label="Job Title"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
          />
          <TextInput
            label="Dependents"
            value={dependents}
            onChange={(event) => setDependents(event.target.value)}
          />
        </Flex>

        {/* Medical Information */}
        <Flex direction='column' gap='sm'>
          <Text size='xl'>Medical Information</Text>
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
          <Stack>
            <Text size='sm'>Are you a veteran?</Text>
            <SegmentedControl
              size='sm'
              value={veteran}
              onChange={setVeteran}
              data={['Yes', 'No']}
            />
          </Stack>
          <TextInput
            label="Race"
            value={race}
            onChange={(event) => setRace(event.target.value)}
          />
          <TextInput
            label="Hair Color"
            value={hairColor}
            onChange={(event) => setHairColor(event.target.value)}
          />
          <TextInput
            label="Highest Grade Level Completed"
            value={gradeLevel}
            onChange={(event) => setGradeLevel(event.target.value)}
          />
          <Checkbox
            label="Have you ever been homeless?"
            checked={homeless}
            onChange={(event) => setHomeless(event.target.checked)}
          />
          <Checkbox
            label="Are you currently enrolled in school?"
            checked={enrolledInSchool}
            onChange={(event) => setEnrolledInSchool(event.target.checked)}
          />
          <TextInput
            label="Personal Medical History"
            value={personalMedicalHistory}
            onChange={(event) => setPersonalMedicalHistory(event.target.value)}
          />
          <TextInput
            label="Family Medical History"
            value={familyMedicalHistory}
            onChange={(event) => setFamilyMedicalHistory(event.target.value)}
          />
          <TextInput
            label="Surgeries"
            value={surgeries}
            onChange={(event) => setSurgeries(event.target.value)}
          />
        </Flex>

        {/* Insurance Information */}
        <Flex direction='column' gap='sm'>
          <Text size='xl'>Insurance Information</Text>
          <Flex gap='md' wrap='wrap'>

          <Select
            data={[
              { value: 'Wages/Salary', label: 'Wages/Salary' },
              { value: 'Social Security', label: 'Social Security' },
              { value: 'SSI-Federal', label: 'SSI-Federal' },
              { value: 'OSIP-State', label: 'OSIP-State' },
              { value: 'Public Assistance', label: 'Public Assistance' },
              { value: 'Dividends/interest', label: 'Dividends/interest' },
              { value: 'Pension/Unemployment/Veterans', label: 'Pension/Unemployment/Veterans' },
            ]}
            label="Primary Source of Household Income"
            value={householdIncomeSource}
            onChange={(value) => setHouseholdIncomeSource(value || '')}
            />
          <Select
            data={[
              { value: 'Employable or Working now', label: 'Employable or Working now' },
              { value: 'Student', label: 'Student' },
              { value: 'Unable for physical or Psychological reasons', label: 'Unable for physical or Psychological reasons' },
              { value: 'Seasonal Worker', label: 'Seasonal Worker' },
              { value: 'Temporary Layoff', label: 'Temporary Layoff' },
            ]}
            label="Employability Factor"
            value={employabilityFactor}
            onChange={(value) => setEmployabilityFactor(value || '')}
            />
            </Flex>
            <Flex gap='md' wrap='wrap'>

          <Select
            data={[
              { value: 'Oregon Health Plan', label: 'Oregon Health Plan' },
              { value: 'Medicare', label: 'Medicare' },
              { value: 'Medicaid', label: 'Medicaid' },
              { value: 'V. A', label: 'V. A' },
              { value: 'Private', label: 'Private' },
              { value: 'Public', label: 'Public' },
              { value: 'None', label: 'None' },
            ]}
            label="Health Insurance Coverage"
            value={healthInsurance}
            onChange={(value) => setHealthInsurance(value || '')}
            />
          <Select
            data={[
              { value: 'In my own home', label: 'In my own home' },
              { value: 'Parent/relative or adult children’s home', label: 'Parent/relative or adult children’s home' },
              { value: 'Foster Home', label: 'Foster Home' },
              { value: 'Institution or group home', label: 'Institution or group home' },
              { value: 'Friend’s home', label: 'Friend’s home' },
              { value: 'Homeless/shelter', label: 'Homeless/shelter' },
            ]}
            label="Living Arrangement"
            value={livingArrangement}
            onChange={(value) => setLivingArrangement(value || '')}
            />
            </Flex>
          <Flex gap='md' wrap='wrap'>
          <TextInput
            label="Primary Insurance to be billed"
            value={primaryInsurance}
            onChange={(event) => setPrimaryInsurance(event.target.value)}
            />
          <TextInput
            label="Primary Insurance Phone #"
            value={primaryInsurancePhone}
            onChange={(event) => setPrimaryInsurancePhone(event.target.value)}
            />
          <TextInput
            label="Primary Insurance Group #"
            value={primaryInsuranceGroup}
            onChange={(event) => setPrimaryInsuranceGroup(event.target.value)}
            />
          <TextInput
            label="Primary Insurance ID #"
            value={primaryInsuranceID}
            onChange={(event) => setPrimaryInsuranceID(event.target.value)}
            />
            </Flex>
            <Flex gap='md' wrap='wrap'>
          <TextInput
            label="Secondary Insurance to be billed"
            value={secondaryInsurance}
            onChange={(event) => setSecondaryInsurance(event.target.value)}
            />
          <TextInput
            label="Secondary Insurance Phone #"
            value={secondaryInsurancePhone}
            onChange={(event) => setSecondaryInsurancePhone(event.target.value)}
            />
          <TextInput
            label="Secondary Insurance Group #"
            value={secondaryInsuranceGroup}
            onChange={(event) => setSecondaryInsuranceGroup(event.target.value)}
            />
          <TextInput
            label="Secondary Insurance ID #"
            value={secondaryInsuranceID}
            onChange={(event) => setSecondaryInsuranceID(event.target.value)}
            />
          <TextInput
            label="Secondary Insured Name"
            value={secondaryInsuredName}
            onChange={(event) => setSecondaryInsuredName(event.target.value)}
            />
          <TextInput
            label="Secondary Insured DOB"
            value={secondaryInsuredDOB}
            onChange={(event) => setSecondaryInsuredDOB(event.target.value)}
            />
            </Flex>
        </Flex>

        {/* Emergency Contact Information */}
        <Flex direction='column' gap='sm'>
          <Text size='xl'>Emergency Contact Information</Text>
          <TextInput
            label="Emergency Contact Name"
            value={emergencyContactName}
            onChange={(event) => setEmergencyContactName(event.target.value)}
          />
          <TextInput
            label="Emergency Contact Relationship"
            value={emergencyContactRelationship}
            onChange={(event) => setEmergencyContactRelationship(event.target.value)}
          />
          <TextInput
            label="Emergency Contact Address"
            value={emergencyContactAddress}
            onChange={(event) => setEmergencyContactAddress(event.target.value)}
          />
          <TextInput
            label="Emergency Contact Phone"
            value={emergencyContactPhone}
            onChange={(event) => setEmergencyContactPhone(event.target.value)}
          />
          <Checkbox
            label="Can we leave Voicemail with emergency contact?"
            checked={emergencyContactVoicemail}
            onChange={(event) => setEmergencyContactVoicemail(event.target.checked)}
          />
          <Checkbox
            label="Is there anyone you would like to authorize to schedule/cancel appointments for you?"
            checked={authorizedToSchedule}
            onChange={(event) => setAuthorizedToSchedule(event.target.checked)}
          />
          {authorizedToSchedule && (
            <>
              <TextInput
                label="Name of Authorized Person"
                value={authorizedPersonName}
                onChange={(event) => setAuthorizedPersonName(event.target.value)}
              />
              <TextInput
                label="DOB of Authorized Person"
                value={authorizedPersonDOB}
                onChange={(event) => setAuthorizedPersonDOB(event.target.value)}
              />
              <Checkbox
                label="Can we discuss your medical treatment with this person?"
                checked={authorizedToDiscussTreatment}
                onChange={(event) => setAuthorizedToDiscussTreatment(event.target.checked)}
              />
              <Checkbox
                label="Is this person authorized to pay benefits?"
                checked={authorizedToPayBenefits}
                onChange={(event) => setAuthorizedToPayBenefits(event.target.checked)}
              />
            </>
          )}
        </Flex>

        {/* Additional Information */}
        <Flex direction='column' gap='sm'>
          <Text size='xl'>Additional Information</Text>
          <TextInput
            label="Main reason for today’s visit"
            value={mainReasonForVisit}
            onChange={(event) => setMainReasonForVisit(event.target.value)}
          />
          <TextInput
            label="Other concerns"
            value={otherConcerns}
            onChange={(event) => setOtherConcerns(event.target.value)}
          />
          <TextInput
            label="What are your health goals for the next year?"
            value={healthGoals}
            onChange={(event) => setHealthGoals(event.target.value)}
          />
          <TextInput
            label="Where were you getting your care before?"
            value={previousCare}
            onChange={(event) => setPreviousCare(event.target.value)}
          />
          <TextInput
            label="Medications (include dosage and frequency)"
            value={medications}
            onChange={(event) => setMedications(event.target.value)}
          />
          <TextInput
            label="Allergies or intolerance to medications (include type of reaction)"
            value={medicationAllergies}
            onChange={(event) => setMedicationAllergies(event.target.value)}
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
        </Flex>

        {/* Signature */}
        <Stack gap='xs'>
          <Text component="label">
            Signature:
          </Text>
          <div style={{ border: '1px solid lightgray', borderRadius: '5px', padding: '0.5rem' }}>
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{ width: 300, height: 150, className: 'signatureCanvas' }}
            />
          </div>
          <Button onClick={handleSignatureClear} color='grey'>Clear Signature</Button>
        </Stack>

        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};
