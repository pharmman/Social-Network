import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';
//
// describe('ProfileStatus component', () => {
//
// })

test('component should be rendered', () => {
    const component = create(<ProfileStatus status={'test'} updateProfileStatus={() => {
    }}/>)
    const instance = component.getInstance()
    expect(instance).toBeTruthy()
})

test('component should be rendered with span', () => {
    const component = create(<ProfileStatus status={'test'} updateProfileStatus={() => {
    }}/>)
    const instance = component.root
    const span = instance.findByType('span')
    expect(span.props.children).toBe('test')
})

test('component should be rendered without input', () => {
    const component = create(<ProfileStatus status={'test'} updateProfileStatus={() => {
    }}/>)
    const instance = component.root
    expect(() => {
        instance.findByType('input')
    }).toThrowError()
})

test('component should be displayed edit mode', () => {
    const component = create(<ProfileStatus status={'test'} updateProfileStatus={() => {
    }}/>)
    const instance = component.root;
    instance.findByType('span').props.onDoubleClick()
    const input = instance.findByType('input')
    expect(input).toBeTruthy()
    expect(input.props.value).toBe('test')
})

test('callback should be called', () => {
    const fakeCallback = jest.fn()
    const component = create(<ProfileStatus status={'test'} updateProfileStatus={fakeCallback}/>)
    const instance = component.root;
    instance.findByType('span').props.onDoubleClick()
    const input = instance.findByType('input')
    input.props.onBlur()
    expect(fakeCallback.mock.calls.length).toBe(1)
})



