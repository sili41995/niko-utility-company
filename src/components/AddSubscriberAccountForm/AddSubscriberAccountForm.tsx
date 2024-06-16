import { useAddSubscriberAccountForm } from '@/hooks';
import { FC } from 'react';

const AddSubscriberAccountForm: FC = () => {
  const { register, streets, houses, defaultValue } =
    useAddSubscriberAccountForm();

  return (
    <form>
      <p>
        Поточний період: <span>_______</span>
      </p>
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
    </form>
  );
};

export default AddSubscriberAccountForm;
