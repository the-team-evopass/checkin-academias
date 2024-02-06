import { getDatabase } from "firebase/database";
import firebaseApp from "./firebaseInit";

const database = getDatabase(firebaseApp);

export default database