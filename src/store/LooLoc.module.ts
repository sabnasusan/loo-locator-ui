import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios';
import { LooCategory } from '@/models/LooCategory';
import { LooDetails } from '@/models/LooDetails';
import { LooAminities} from '@/models/LooAminities';
import Service from '@/services/ServiceConfig';

const instance = axios.create();
const service = new Service();

@Module
export default class LooLoc extends VuexModule {
  public category: LooCategory[] = [];
  public looDetail: LooDetails[] = [];
  public aminityDetail: LooAminities[] = [];

  @Mutation
  public setCategories(category: LooCategory[]) {
    this.category = category;
  }
  @Mutation
  public setLooDetails(looDetails: LooDetails[]) {
    this.looDetail = looDetails;
  }
  @Mutation
  public setAminityDetails(aminityDetails: LooAminities[]) {
    this.aminityDetail = aminityDetails;
  }

  @Action({ commit: 'setCategories', rawError: true  })
  public async categories() {
    try {
      // Node data fetch
      // const Url = service.apiUrl('category');
      // return response.data;
      const Url = service.apiUrl('db.json');
      const response = await instance.get(Url);
      return response.data.categories;
    } catch (err) {
      throw(err);
    }
  }

  @Action({ commit: 'setLooDetails' , rawError: true  })
  public async looDetails(payload: any) {
    try {
      // Node data fetch
      // const Url = service.apiUrl('facility?cid=');
      // const ServiceUrl = `${Url} + ${payload.id}`;
      // const response = await instance.get(ServiceUrl);
      const Url = service.apiUrl('db.json');
      const response = await instance.get(Url);
      const id = payload.id;
      return response.data.looDetails[id];
    } catch (err) {
      throw(err);
    }
  }

  @Action({ commit: 'setAminityDetails' , rawError: true  })
  public async aminityDetails(payload: any) {
    try {
      // Node data fetch
      // const Url = service.apiUrl('facility?cid=');
      // const ServiceUrl = `${Url} + ${payload.id}`;
      // const response = await instance.get(ServiceUrl);
      const Url = service.apiUrl('db.json');
      const response = await instance.get(Url);
      const id = payload.id;
      return response.data.aminityDetails[id];
    } catch (err) {
      throw(err);
    }
  }

}
