import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';


test('should correctly render EditExpensePage', () => {
  const editExpense = jest.fn();
  const removeExpense = jest.fn();
  const history = { push: jest.fn() }
  const wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const editExpense = jest.fn();
  const removeExpense = jest.fn();
  const history = { push: jest.fn() }
  const wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
    />
  );
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle removeExpense', () => {
  const editExpense = jest.fn();
  const removeExpense = jest.fn();
  const history = { push: jest.fn() }
  const wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
    />
  );
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
  expect(wrapper).toMatchSnapshot();
});