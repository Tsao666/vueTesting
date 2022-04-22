import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'


describe('Nav.vue', () => {
    it('profile exist', () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggin: true
                }
            },
        });

        expect(wrapper.find('#profile').text()).toEqual("My Profile");
    });

    it('profile not exist', () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggin: false
                }
            },
        });

        expect(wrapper.find('#profile').exists()).toBe(false);
    });
});