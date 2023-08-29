import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import LooMap from '@/components/LooMap.vue';
import { LooCategory } from '@/models/LooCategory';
import { LooDetails } from '@/models/LooDetails';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('LooMap.vue', () => {
  let actions;
  let store: any;
  let category: any[] = [];
  let looDetail: any[] = [];
  const list = {
    categories: [
      {
        id: 1,
        label: 'Ladies',
        CreatedAt: '2019-10-28 00:00:00.0000000 +00:00',
        UpdatedAt: '2019-10-28 00:00:00.0000000 +00:00',
      },
      {
        id: 2,
        label: 'Mens',
        CreatedAt: '2019-10-28 00:00:00.0000000 +00:00',
        UpdatedAt: '2019-10-28 00:00:00.0000000 +00:00',
      },
      {
        id: 3,
        label: 'Accessible',
        CreatedAt: '2019-10-28 00:00:00.0000000 +00:00',
        UpdatedAt: '2019-10-28 00:00:00.0000000 +00:00',
      },
      {
        id: 4,
        label: 'Parents',
        CreatedAt: '2019-10-28 00:00:00.0000000 +00:00',
        UpdatedAt: '2019-10-28 00:00:00.0000000 +00:00',
      },
    ],
    looDetails: {
      4: [
        {
          id: 1,
          name: 'The Blue Room',
          description:
            'The Blue Room is your closest Parents room and is 50m away, on Level 1 at the East end, opposite Target',
          isAvailable: 1,
          last_cleaned_time: '2019-10-28 00:00:00.0000000 +00:00',
          cleaningInfo: '2019-10-28 00:00:00.0000000 +00:00',
          createdAt: '2019-10-28 00:00:00.0000000 +00:00',
          updatedAt: '2019-10-28 00:00:00.0000000 +00:00',
          geoLocation: '',
          category_id: 4,
        },
      ],
      2: [
        {
          id: 2,
          name: 'The Men Room',
          description:
            'The Men Room is your closest Parents room and is 50m away, on Level 1 at the East end, opposite Target',
          isAvailable: 1,
          last_cleaned_time: '2019-10-28 00:00:00.0000000 +00:00',
          cleaningInfo: '2019-10-28 00:00:00.0000000 +00:00',
          createdAt: '2019-10-28 00:00:00.0000000 +00:00',
          updatedAt: '2019-10-28 00:00:00.0000000 +00:00',
          geoLocation: '',
          category_id: 2,
        },
      ],
      1: [
        {
          id: 3,
          name: 'The Ladies Room',
          description:
            'The Ladies Room is your closest Parents room and is 50m away, on Level 1 at the East end, opposite Target',
          isAvailable: 1,
          last_cleaned_time: '2019-10-28 00:00:00.0000000 +00:00',
          cleaningInfo: '2019-10-28 00:00:00.0000000 +00:00',
          createdAt: '2019-10-28 00:00:00.0000000 +00:00',
          updatedAt: '2019-10-28 00:00:00.0000000 +00:00',
          geoLocation: '',
          category_id: 1,
        },
      ],
      3: [
        {
          id: 4,
          name: 'The Accessible Room',
          description:
            'The Accessible Room is your closest Parents room and is 50m away, on Level 1 at the East end, opposite Target',
          isAvailable: 1,
          last_cleaned_time: '2019-10-28 00:00:00.0000000 +00:00',
          cleaningInfo: '2019-10-28 00:00:00.0000000 +00:00',
          createdAt: '2019-10-28 00:00:00.0000000 +00:00',
          updatedAt: '2019-10-28 00:00:00.0000000 +00:00',
          geoLocation: '',
          category_id: 3,
        },
      ],
    },
  };
  beforeEach(() => {
    actions = {
      categories: sinon.stub().returns(list.categories),
      looDetails: sinon.stub().returns(list.looDetails[4]),
    };
    category = list.categories;
    looDetail = list.looDetails[4];
    const LooLoc = {
      state: {
        category,
        looDetail,
      },
      actions,
    };
    store = new Vuex.Store({
      modules: {
        LooLoc,
      },
    });
  });

  it('tests the category details', async () => {
    const wrapper = shallowMount(LooMap, {
      store,
      localVue,
    });
    await (wrapper.vm as any).getCategories();
    expect(wrapper.vm.$data.categories).to.eql(list.categories);
  });
  it('tests the loo details', async () => {
    const wrapper = shallowMount(LooMap, {
      store,
      localVue,
    });
    await (wrapper.vm as any).getLooDetails(4);
    expect(wrapper.vm.$data.looDetails).to.eql(list.looDetails[4]);
  });
  it('tests the loader will be turned of, on call of loo details services', async () => {
    const wrapper = shallowMount(LooMap, {
      store,
      localVue,
    });
    await (wrapper.vm as any).getLooDetails(4);
    expect(wrapper.vm.$data.loader).to.eql(false);
  });
  it('tests the loader will be turned on, on call of loo categories services', async () => {
    const wrapper = shallowMount(LooMap, {
      store,
      localVue,
    });
    await (wrapper.vm as any).getCategories();
    expect(wrapper.vm.$data.loader).to.eql(false);
  });
});
