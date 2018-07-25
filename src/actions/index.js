export function importContent(response) {
  return {
    type: 'IMPORT_CONTENT',
    payload: response,
  };
}
