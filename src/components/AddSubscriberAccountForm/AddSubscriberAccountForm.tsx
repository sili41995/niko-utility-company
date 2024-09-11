import { useAddSubscriberAccountForm } from '@/hooks';
import { FC } from 'react';
import Input from '@/components/Input';
import { CheckboxNames, InputLabels, InputTypes, regExp } from '@/constants';
import {
  PersonParameters,
  SubscriberAccountContainer,
  AddressWrap,
  TypesWrap,
  ServicesWrap,
  Form,
  ServiceTitleWrap,
  SectionTitle,
  ServicesList,
  ServicesListTitle,
  ServicesListTitleWrap,
  ServiceName,
  ServiceListItem,
  PersonParametersWrap,
  CheckboxWrap,
  CheckboxName,
} from './AddSubscriberAccountForm.styled';
import Checkbox from '@/components/Checkbox';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Select from '@/components/Select';
import PeriodTitle from '@/components/PeriodTitle';

const AddSubscriberAccountForm: FC = () => {
  const {
    register,
    firstDayOfMonth,
    apartmentTypes,
    isLoading,
    handleFormSubmit,
    handleSubmit,
    isRemovalHouseholdWaste,
    isEligibleForBenefit,
    onCheckboxChange,
    houses,
    streets,
    accountTypes,
  } = useAddSubscriberAccountForm();

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <PeriodTitle />
      <AddressWrap>
        <Select
          label={`${InputLabels.street}:`}
          settings={{ ...register('streetId', { required: true }) }}
          data={streets}
          width={550}
          horizontal
        />
        <Select
          label={`${InputLabels.house}:`}
          settings={{ ...register('houseId', { required: true }) }}
          data={houses}
          width={550}
          horizontal
        />
        <Input
          settings={{ ...register('apartment') }}
          label={`${InputLabels.apartment}:`}
          placeholder={InputLabels.apartment}
          type={InputTypes.text}
          horizontal
          width={550}
        />
      </AddressWrap>
      <SubscriberAccountContainer>
        <Input
          settings={{ ...register('number', { required: true }) }}
          label={`${InputLabels.subscriberAccountNumber}:`}
          placeholder={InputLabels.subscriberAccountNumber}
          type={InputTypes.text}
          accent
          horizontal
          width={550}
        />
        <Input
          settings={{ ...register('contractNumber', { required: true }) }}
          label={`${InputLabels.contractNumber}:`}
          placeholder={InputLabels.contractNumber}
          type={InputTypes.text}
          horizontal
          width={550}
        />
        <Input
          settings={{ ...register('contractDate', { required: true }) }}
          label={`${InputLabels.contractDate}:`}
          type={InputTypes.date}
          defaultValue={firstDayOfMonth}
          horizontal
          width={550}
        />
      </SubscriberAccountContainer>
      <TypesWrap>
        <Select
          label={`${InputLabels.category}:`}
          settings={{ ...register('category', { required: true }) }}
          data={accountTypes}
          width={550}
          horizontal
        />
        <Select
          label={`${InputLabels.isLivingApartment}:`}
          settings={{ ...register('isLivingApartment', { required: true }) }}
          data={apartmentTypes}
          width={550}
          horizontal
        />
        <Input
          settings={{ ...register('residents', { required: true }) }}
          label={`${InputLabels.residents}:`}
          placeholder={InputLabels.residents}
          type={InputTypes.number}
          horizontal
          width={550}
        />
      </TypesWrap>
      <ServicesWrap>
        <ServiceTitleWrap>
          <SectionTitle>Послуги:</SectionTitle>
          <Input
            settings={{ ...register('period', { required: true }) }}
            label={`${InputLabels.serviceStart}:`}
            type={InputTypes.date}
            horizontal
            width={550}
          />
        </ServiceTitleWrap>
        <ServicesList>
          <ServicesListTitleWrap>
            <ServicesListTitle>
              Поводження з побутовими відходами:
            </ServicesListTitle>
          </ServicesListTitleWrap>
          <ServiceListItem>
            <ServiceName>Вивезення побутових відходів (б/с)</ServiceName>
            <Checkbox
              settings={{
                ...register('isRemovalHouseholdWaste'),
              }}
              checked={isRemovalHouseholdWaste}
              onChange={onCheckboxChange}
              name={CheckboxNames.isRemovalHouseholdWaste}
            />
          </ServiceListItem>
        </ServicesList>
      </ServicesWrap>
      <PersonParametersWrap>
        <SectionTitle>Послуги:</SectionTitle>
        <PersonParameters>
          <Input
            settings={{ ...register('surname', { required: true }) }}
            label={`${InputLabels.surname}:`}
            placeholder={InputLabels.surname}
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('name', { required: true }) }}
            label={`${InputLabels.ownerName}:`}
            placeholder={InputLabels.ownerName}
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('middleName', { required: true }) }}
            label={`${InputLabels.middleName}:`}
            placeholder={InputLabels.middleName}
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <CheckboxWrap>
            <CheckboxName>Має право на пільгу</CheckboxName>
            <Checkbox
              settings={{
                ...register('isEligibleForBenefit'),
              }}
              checked={isEligibleForBenefit}
              onChange={onCheckboxChange}
              name={CheckboxNames.isEligibleForBenefit}
            />
          </CheckboxWrap>
          <Input
            settings={{
              ...register('phone', { required: true, pattern: regExp.phone }),
            }}
            label={`${InputLabels.phone}:`}
            placeholder={InputLabels.phone}
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{
              ...register('additionalPhone', {
                required: true,
                pattern: regExp.phone,
              }),
            }}
            label={`${InputLabels.additionalPhone}:`}
            placeholder={InputLabels.additionalPhone}
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{
              ...register('email', { pattern: regExp.email }),
            }}
            label={`${InputLabels.email}:`}
            placeholder={InputLabels.email}
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('birthday') }}
            label={`${InputLabels.birthday}:`}
            type={InputTypes.date}
            horizontal
            width={550}
          />
        </PersonParameters>
      </PersonParametersWrap>
      <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
    </Form>
  );
};

export default AddSubscriberAccountForm;
