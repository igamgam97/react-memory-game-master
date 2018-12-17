import { mount } from 'enzyme';
import Cards from '../components/Cards/'
import CardsConnected from '../components/Cards/CardsConnected'
import { shallow } from 'enzyme';
import React from "react";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainLayout from "../components/MainLayout/MainLayout";


configure({ adapter: new Adapter() });


describe('CompareCardAttempts', () => {
    it ('comparison of two identical cards', () => {
        const wrapper = shallow(<Cards/>);
        wrapper.instance().addCardAttempt(1,'first');
        wrapper.instance().addCardAttempt(2,'first');
        expect(wrapper.instance().compareCardAttempts()).toBe(true);
    });
})

describe('CheckClear', () => {
    it ('check cardAttemptsCount', () => {
        const wrapper = shallow(<Cards/>);
        wrapper.instance().addCardAttempt(1,'first');
        wrapper.instance().addCardAttempt(2,'first');
        wrapper.instance().clearPreviousCardAttempts();
        expect(wrapper.state().cardAttemptsCount).toBe(1);
    });
})

describe('CheckAuth', () => {
    it ('check authenticated', () => {
        const wrapper = shallow(<MainLayout/>);
        expect(wrapper.state().authenticated).toBe(false)
    });
})

describe('CountCardAttempts', () => {
    it ('check countCardAttempts', () => {
        const wrapper = shallow(<Cards />)
        wrapper.setState({cardAttemptsCount: 4})
        wrapper.instance().clearPreviousCardAttempts();
        expect(wrapper.state().cardAttemptsCount).toBe(1)
    });
})
