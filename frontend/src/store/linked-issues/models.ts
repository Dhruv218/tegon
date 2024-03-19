/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { types } from 'mobx-state-tree';

export const LinkedIssue = types.model({
  id: types.string,
  createdAt: types.string,
  updatedAt: types.string,

  url: types.string,
  sourceId: types.union(types.string, types.undefined),
  source: types.string,
  sourceData: types.string,
  issueId: types.string,
  createdById: types.union(types.string, types.undefined),
});
