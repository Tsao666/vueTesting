import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'


describe('TodoApp.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TodoApp);
    })

    it('render todo', () => {
        const taggedDOM = wrapper.find('[data-test="tag"]')

        expect(taggedDOM.text()).toBe('aaa!');
    });

    it('add new todo', async () => {
        expect(wrapper.findAll('[data-test="tag"]')).toHaveLength(1);

        await wrapper.get('[data-test="newTag"]').setValue('newTagValue!')
        await wrapper.get('[data-test="form"]').trigger('submit')

        expect(wrapper.findAll('[data-test="tag"]')).toHaveLength(2);
    })

    it('complete todo', async () => {
        await wrapper.get('[data-test="todo-checkbox"]').setChecked(true)

        expect(wrapper.get('[data-test="tag"]').classes()).toContain('doned')
    })
});