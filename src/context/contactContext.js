import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    contact: {},
    setContacts: () => {},
    contacts: [],
    filteredContacts: [],
    contactQuery: {},
    groups: [],
    onContactChange: () => {},
    setFilteredContacts : () => {},
    deleteContact: () => {},
    createContact: () => {},
    contactSearch: () => {},
});
