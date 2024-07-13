import { useAddSubscriberAccountForm } from '@/hooks';
import { FC } from 'react';
import Input from '@/components/Input';
import { CheckboxNames, InputTypes, regExp } from '@/constants';
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
    streetDefaultValue,
    streets,
    accountTypes,
  } = useAddSubscriberAccountForm();

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <PeriodTitle />
      <AddressWrap>
        <Select
          label='Вулиця:'
          settings={{ ...register('streetId', { required: true }) }}
          defaultValue={streetDefaultValue}
          data={streets}
          width={550}
          horizontal
        />
        <Select
          label='Будинок:'
          settings={{ ...register('houseId', { required: true }) }}
          data={houses}
          width={550}
          horizontal
        />
        <Input
          settings={{ ...register('apartment') }}
          label='№ квартири:'
          placeholder='№ квартири'
          type={InputTypes.text}
          horizontal
          width={550}
        />
      </AddressWrap>
      <SubscriberAccountContainer>
        <Input
          settings={{ ...register('subscriberAccount', { required: true }) }}
          label='Абонентський рахунок:'
          placeholder='Абонентський рахунок'
          type={InputTypes.text}
          accent
          horizontal
          width={550}
        />
        <Input
          settings={{ ...register('contract', { required: true }) }}
          label='Договір №:'
          placeholder='Договір №'
          type={InputTypes.text}
          accent
          horizontal
          width={550}
        />
        <Input
          settings={{ ...register('contractDate', { required: true }) }}
          label='від'
          type={InputTypes.date}
          defaultValue={firstDayOfMonth}
          horizontal
          width={550}
        />
      </SubscriberAccountContainer>
      <TypesWrap>
        <Select
          label='Тип рахунку:'
          settings={{ ...register('accountType', { required: true }) }}
          data={accountTypes}
          width={550}
          horizontal
        />
        <Select
          label='Тип приміщення:'
          settings={{ ...register('isLivingApartment', { required: true }) }}
          data={apartmentTypes}
          width={550}
          horizontal
        />
        <Input
          settings={{ ...register('residents', { required: true }) }}
          label='Мешканців:'
          placeholder='Мешканців'
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
            label='Послуги надаються з:'
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
            settings={{ ...register('utr', { required: true }) }}
            label='ІПН:'
            placeholder='ІПН'
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('passport', { required: true }) }}
            label='Паспорт:'
            placeholder='Паспорт'
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('surname', { required: true }) }}
            label='Прізвище:'
            placeholder='Прізвище'
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('name', { required: true }) }}
            label="Ім'я:"
            placeholder="Ім'я"
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('middleName', { required: true }) }}
            label='По-батькові:'
            placeholder='По-батькові'
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
            label='Телефон:'
            placeholder='Телефон'
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
            label='Телефон додатковий:'
            placeholder='Телефон додатковий'
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{
              ...register('email', { pattern: regExp.email }),
            }}
            label='Email:'
            placeholder='Email'
            type={InputTypes.text}
            horizontal
            width={550}
          />
          <Input
            settings={{ ...register('birthday') }}
            label='День народження:'
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
