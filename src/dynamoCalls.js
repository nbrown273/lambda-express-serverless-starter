import { ddb } from './environment';

export const getDataFromKey = async (table, id) => {
  const params = {
    TableName: table,
    Key: {
      _id: id
    }
  };

  try {
    return await ddb.get(params).promise();
  } catch (e) {
    console.error(JSON.stringify(e));
    return e;
  }
};
