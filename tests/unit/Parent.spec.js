import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'


describe('Message.vue', () => {
    it('contain Parent & Child', () => {
        const wrapper = mount(Parent);

        expect(wrapper.text()).toContain('Parent');
        expect(wrapper.text()).toContain('Child');
    });

    it('not contain Child', () => {
        const wrapper = shallowMount(Parent);

        expect(wrapper.text()).not.toContain('Child');
    });
});