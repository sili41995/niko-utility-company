import { useAddSubscriberAccountForm } from '@/hooks';
import { FC, useEffect } from 'react';
import Input from '../Input';
import { InputTypes, regExp } from '@/constants';
import {
  ApartmentParameters,
  PersonParameters,
  SubscriberAccountContainer,
} from './AddSubscriberAccountForm.styled';
import Checkbox from '../Checkbox';
import SubmitFormBtn from '../SubmitFormBtn';

const AddSubscriberAccountForm: FC = () => {
  const {
    register,
    streets,
    houses,
    defaultValue,
    currentDate,
    firstDayOfMonth,
    accountTypes,
    apartmentTypes,
    individualHeating,
    period,
    isLoading,
    handleFormSubmit,
    handleSubmit,
    checked,
    onCheckboxChange,
  } = useAddSubscriberAccountForm();

  useEffect(() => {
    console.log(checked);
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <p>
        Поточний період: <span>{currentDate}</span>
      </p>
      <SubscriberAccountContainer>
        <label>
          <span>Вулиця:</span>
          <select {...register('street')} defaultValue={defaultValue}>
            {streets.map(({ name, id, type }) => (
              <option value={id} key={id}>
                {`${type} ${name}`}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Будинок:</span>
          <select {...register('house')}>
            {houses.map(({ id, number }) => (
              <option value={id} key={id}>
                {number}
              </option>
            ))}
          </select>
        </label>
        <Input
          settings={{ ...register('apartment') }}
          label='№ квартири:'
          type={InputTypes.text}
        />
        <Input
          settings={{ ...register('subscriberAccount') }}
          label='Абон. рахунок №:'
          type={InputTypes.text}
          accent={true}
        />
        <Input
          settings={{ ...register('contract') }}
          label='Договір №:'
          type={InputTypes.text}
          accent={true}
        />
        <Input
          settings={{ ...register('contractDate') }}
          label='від'
          type={InputTypes.date}
          defaultValue={firstDayOfMonth}
        />
        <label>
          <span>Тип рахунку:</span>
          <select {...register('accountType')}>
            {accountTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Тип рахунку:</span>
          <select {...register('isLivingApartment')}>
            {apartmentTypes.map(({ title, value }) => (
              <option value={value} key={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
        <Input
          settings={{ ...register('residents') }}
          label='Мешканців:'
          type={InputTypes.number}
        />
      </SubscriberAccountContainer>
      <ApartmentParameters>
        <Input
          settings={{ ...register('floor') }}
          label='Поверх:'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('rooms') }}
          label='Кількість кімнат:'
          type={InputTypes.number}
        />
        <label>
          <span>Індивідуальне опалення:</span>
          <select {...register('individualHeating')}>
            {individualHeating.map(({ title, value }) => (
              <option value={value} key={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
        <Input
          settings={{ ...register('totalArea') }}
          label='Загальна площа (м2):'
          type={InputTypes.number}
          step={0.01}
        />
        <Input
          settings={{ ...register('heatingArea') }}
          label='Опалювальна пл. (м2):'
          type={InputTypes.number}
          step={0.1}
        />
        <Input
          settings={{ ...register('dwellingPlace') }}
          label='Житлова площа (м2):'
          type={InputTypes.number}
          step={0.1}
        />
        <Input
          settings={{ ...register('loggiaArea') }}
          label='Площа лоджій (м2):'
          type={InputTypes.number}
          step={0.1}
        />
        <Input
          settings={{ ...register('balconyArea') }}
          label='Площа балконів (м2):'
          type={InputTypes.number}
          step={0.1}
        />
        <Input
          settings={{ ...register('terraceArea') }}
          label='Площа терас (м2):'
          type={InputTypes.number}
          step={0.1}
        />
        <Input
          settings={{ ...register('storageRoomsArea') }}
          label='Площа кладових приміщень (м2):'
          type={InputTypes.number}
          step={0.01}
        />
        <Input
          settings={{ ...register('cattle') }}
          label='Велика рогата худоба (вода) (шт.):'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('calf') }}
          label='Теля (вода) (шт.):'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('goats') }}
          label='Кози (вода) (шт.):'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('birds') }}
          label='Птиця (вода) (шт.):'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('auto') }}
          label='Авто (вода) (шт.):'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('motorcycle') }}
          label='Мотоцикл (вода) (шт.):'
          type={InputTypes.number}
        />
        <Input
          settings={{ ...register('watering') }}
          label='Полив (вода) (сот.):'
          type={InputTypes.number}
        />
        <div>
          <p>Послуги:</p>
          <label>
            <span>Послуги надаються з:</span>
            <select {...register('period')}>
              {period.map(({ title, period }) => (
                <option value={period} key={period}>
                  {`${period} ${title}`}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <p>- Вивезення побутових відходів (б/с)</p>
          <Checkbox
            settings={{ ...register('isRemovalHouseholdWaste') }}
            checked={checked}
            onChange={onCheckboxChange}
          />
        </div>
        <PersonParameters>
          <Input
            settings={{ ...register('utr') }}
            label='ІПН:'
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('passport') }}
            label='Паспорт:'
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('surname') }}
            label='Прізвище:'
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('name') }}
            label="Ім'я:"
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('middleName') }}
            label='По-батькові:'
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('phone'), pattern: regExp.phone }}
            label='Телефон:'
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('additionalPhone'), pattern: regExp.phone }}
            label='Телефон додатковий:'
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('email'), pattern: regExp.email }}
            label='Електронна адреса:'
            type={InputTypes.text}
          />
          <Input
            settings={{ ...register('birthday') }}
            label='День народження:'
            type={InputTypes.date}
          />
        </PersonParameters>
      </ApartmentParameters>
      <SubmitFormBtn title='Зберегти' disabled={isLoading} />
    </form>
  );
};

export default AddSubscriberAccountForm;
