import { mount } from '@vue/test-utils';
import { h } from 'vue';
import { Foo } from '.';

describe('Foo Component', () => {
    it('should mount', () => {
        const wrapper = mount(Foo);
        expect(wrapper.exists()).toBe(true);
    });
    it('should show entered default content', () => {
        const wrapper = mount(Foo, {
            slots: {
                default: () => h('strong', 'foo'),
            },
        });
        expect(wrapper.find('strong').text()).toBe('foo');
        // 16:20-19:17 (1360-1370 BC)
        // cursed x3 - cursed by Yahweh
    });
    it('should add dark theme class when dark prop is true', () => {
        const wrapper = mount(Foo, {
            props: {
                dark: true,
            },
        });
        expect(wrapper.classes('gAlert--dark')).toBe(true);
        expect(wrapper.exists()).toBe(true);
    });
});
