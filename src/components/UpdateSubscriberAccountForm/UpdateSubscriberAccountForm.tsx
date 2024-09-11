import { FC } from 'react';
import Input from '@/components/Input';
import {
  CheckboxNames,
  InputLabels,
  InputTypes,
  apartmentTypes,
  regExp,
} from '@/constants';
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
} from './UpdateSubscriberAccountForm.styled';
import Checkbox from '@/components/Checkbox';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Select from '@/components/Select';
import { IProps } from './UpdateSubscriberAccountForm.types';
import { useUpdateSubscriberAccountForm } from '@/hooks';

const UpdateSubscriberAccountForm: FC<IProps> = ({ subscriberAccount }) => {
  const {
    handleSubmit,
    handleFormSubmit,
    register,
    apartment,
    apartmentType,
    residents,
    period,
    isRemovalHouseHoldWaste,
    onCheckboxChange,
    surname,
    name,
    middleName,
    isEligibleForBenefit,
    phone,
    additionalPhone,
    email,
    birthday,
    isLoading,
    number,
  } = useUpdateSubscriberAccountForm(subscriberAccount);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <AddressWrap>
        <Input
          settings={{ ...register('apartment') }}
          label={`${InputLabels.apartment}:`}
          type={InputTypes.text}
          defaultValue={apartment}
          width={550}
          horizontal
          disabled
        />
      </AddressWrap>
      <SubscriberAccountContainer>
        <Input
          settings={{ ...register('number') }}
          label={`${InputLabels.subscriberAccountNumber}:`}
          placeholder={InputLabels.subscriberAccountNumber}
          type={InputTypes.text}
          defaultValue={number}
          width={550}
          horizontal
          disabled
        />
      </SubscriberAccountContainer>
      <TypesWrap>
        <Select
          settings={{ ...register('isLivingApartment', { required: true }) }}
          label={`${InputLabels.isLivingApartment}:`}
          data={apartmentTypes}
          defaultValue={apartmentType}
          width={550}
          horizontal
        />
        <Input
          settings={{ ...register('residents', { required: true }) }}
          label={`${InputLabels.residents}:`}
          type={InputTypes.number}
          defaultValue={String(residents)}
          width={550}
          horizontal
        />
      </TypesWrap>
      <ServicesWrap>
        <ServiceTitleWrap>
          <SectionTitle>Послуги:</SectionTitle>
          <Input
            settings={{ ...register('period', { required: true }) }}
            label={`${InputLabels.serviceStart}:`}
            type={InputTypes.date}
            defaultValue={period}
            width={550}
            horizontal
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
              checked={isRemovalHouseHoldWaste}
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
            settings={{ ...register('surname') }}
            label={`${InputLabels.surname}:`}
            type={InputTypes.text}
            defaultValue={surname}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('name') }}
            label={`${InputLabels.ownerName}:`}
            type={InputTypes.text}
            defaultValue={name}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('middleName') }}
            label={`${InputLabels.middleName}:`}
            type={InputTypes.text}
            defaultValue={middleName}
            width={550}
            horizontal
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
            type={InputTypes.text}
            defaultValue={phone}
            width={550}
            horizontal
          />
          <Input
            settings={{
              ...register('additionalPhone', {
                required: true,
                pattern: regExp.phone,
              }),
            }}
            label={`${InputLabels.additionalPhone}:`}
            type={InputTypes.text}
            defaultValue={additionalPhone}
            width={550}
            horizontal
          />
          <Input
            settings={{
              ...register('email', { pattern: regExp.email }),
            }}
            label={`${InputLabels.email}:`}
            placeholder={InputLabels.email}
            type={InputTypes.text}
            defaultValue={email}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('birthday') }}
            label={`${InputLabels.birthday}:`}
            type={InputTypes.date}
            defaultValue={birthday}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('documentName', { required: true }) }}
            label={`${InputLabels.documentName}:`}
            placeholder={InputLabels.documentName}
            type={InputTypes.text}
            width={550}
            horizontal
          />
          <Input
            settings={{ ...register('comment', { required: true }) }}
            label={`${InputLabels.comment}:`}
            placeholder={InputLabels.comment}
            type={InputTypes.text}
            width={550}
            horizontal
          />
        </PersonParameters>
      </PersonParametersWrap>
      <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
    </Form>
  );
};

export default UpdateSubscriberAccountForm;
