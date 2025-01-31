import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";
import { addCheckin } from "../../redux/slices/sliceCheckin";
import database from "./realtimeDatabaseInit";
import MeasureTimeBetweenNotification from "../../utils/timer/measureTimeBetweenNotification";

interface CheckinProps {
  idUser: number;
  image: string;
  isChecked: boolean;
  name: string;
  time: string;
}

interface UserInfosProps {
  internalID: number;
}

interface RootState {
  userInfos: UserInfosProps;
}

const db = database;

export default function RealtimeDatabaseListener() {
  const dispatch = useDispatch();

  const userInfos = useSelector((state: RootState) => state.userInfos);
  const internalID = userInfos.internalID;

  useEffect(() => {
    console.log(`${internalID}/checkin/`);
    const unsubscribe = onValue(
      ref(db, `${internalID}/checkin/`),
      (snapshot) => {
        const data: CheckinProps[] | null = snapshot.val();

        console.log(data);

        if (data && typeof data === "object") {
          const dataArray = Object.values(data);
          const filteredArray = dataArray.filter((obj) => obj !== null);
          filteredArray.sort(
            (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
          );

          const userIdex = parseInt(
            Object.getOwnPropertyNames(filteredArray)[0]
          );
          const timeOfLastCheckin = new Date(
            filteredArray[userIdex].time
          ).getTime();

          console.log(
            MeasureTimeBetweenNotification(timeOfLastCheckin, 15000),
            "testando logica do tempo"
          );

          if (MeasureTimeBetweenNotification(timeOfLastCheckin, 15000)) {
            dispatch(
              addCheckin({
                idUser: filteredArray[userIdex]?.idUser,
                image: filteredArray[userIdex]?.image,
                isChecked: filteredArray[userIdex]?.isChecked,
                name: filteredArray[userIdex]?.name,
                time: filteredArray[userIdex]?.time,
              })
            );
          }
        }
      }
    );

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
}
