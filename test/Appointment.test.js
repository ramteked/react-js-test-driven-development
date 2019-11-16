import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment'

let customer ;
let container ;

beforeEach(() => {
    container = document.createElement('div');
}); 

const render = component => ReactDOM.render(component, container);

describe('Appointment', () => {
    it('rendres the customer first name', () =>{
        customer  = {firstName : 'Ashley'};
        
        render(<Appointment customer={customer} />);

        expect(container.textContent).toMatch('Ashley');
    }),
    it('render another first name', () => {

        //Given
        customer={ firstName : 'Jorden'};
       
        //When
        render(<Appointment customer={customer} />);

        //what to test
        expect(container.textContent).toMatch('Jorden');

    });
});