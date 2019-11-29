export function getDataByUID(dbObject, dbList, uid) {
  const dbObjectsArray = dbObject[dbList].elements.filter(obj => {
    return obj.elementUID === uid;
  });
  if (dbObjectsArray.length > 1 || dbObjectsArray.length === 0) {
    return -1;
  }
  return dbObjectsArray[0];
}

export function getReferenceArray(
  dbObject,
  objectsRefferenceTo,
  refferenceList
) {
  const onlyWanted = objectsRefferenceTo.elementRefferedTo.filter(obj => {
    return obj.listName === refferenceList;
  });
  if (onlyWanted.length === 0) {
    return -1;
  }
  return dbObject[refferenceList].elements.filter(obj => {
    const found = onlyWanted.find(element => {
      return element.elementUID === obj.elementUID;
    });
    return found !== undefined;
  });
}
