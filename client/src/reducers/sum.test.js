import { ORM } from "redux-orm";
import Project from '../models/projectsModel';

import { entities } from './ormReducers';
import { projects } from '../data/projects';
const prettyPrint = (obj) => console.log(JSON.stringify(obj, null, 2));

const orm = new ORM();
orm.register(Project);
const initialState = orm.getEmptyState();

const action = {
  type: 'UPDATE_ORM',
  payload: { projects },
}

const res =  entities(null , action)

prettyPrint(res);

test('adds 1 + 2 to equal 3', () => {
  expect(1).toBe(1);
});
