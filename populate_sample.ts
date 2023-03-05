import a from "./sample/bloodgroups.json";
import b from "./sample/tests.json";
import c from "./sample/allergies.json";
import d from "./sample/prescription.json";
import pat from "./sample/patients.json";
import vis from "./sample/visits.json";
import doc from "./sample/doctors.json";
import pl from "./sample/prescription_list.json";
import al from "./sample/allergies_list.json";
import tl from "./sample/tests_list.json";

import { BloodGroup } from "./src/models/blood_group";
import { Tests, TestsList } from "./src/models/tests";
import { Allergies, AllergiesList } from "./src/models/allergies";
import { Prescriptions, PrescriptionList } from "./src/models/prescriptions";
import { Patients } from "./src/models/patient";
import { Visits } from "./src/models/visits";
import { Doctors } from "./src/models/doctor";

export default function TestingData() {
  BloodGroup.bulkCreate(a);
  Tests.bulkCreate(b);
  Allergies.bulkCreate(c);
  Prescriptions.bulkCreate(d);
  Patients.bulkCreate(pat);
  Doctors.bulkCreate(doc);
  Visits.bulkCreate(vis);
  PrescriptionList.bulkCreate(pl);
  AllergiesList.bulkCreate(al);
  TestsList.bulkCreate(tl);
}
