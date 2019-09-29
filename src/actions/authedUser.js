export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'
export const REMOVE_AUTHENTICATED_USER = 'REMOVE_AUTHENTICATED_USER'
export function setAuthenticatedUser(id) 
{
  return {
    type: SET_AUTHENTICATED_USER,
    id
  }
}

export function removeAuthenticatedUser(id) 
{
  return {
    type: REMOVE_AUTHENTICATED_USER,
    id
  }
}