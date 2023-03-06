import bgjson from "./sample/bloodgroups.json";
import testjson from "./sample/tests.json";
import allergiesjson from "./sample/allergies.json";
import presjson from "./sample/prescription.json";
import patjson from "./sample/patients.json";
import vis from "./sample/visits.json";
import docjson from "./sample/doctors.json";
import pljson from "./sample/prescription_list.json";
import aljson from "./sample/allergies_list.json";
import tljson from "./sample/tests_list.json";
import opjson from "./sample/operators.json";

import { BloodGroup } from "./src/models/blood_group";
import { Tests, TestsList } from "./src/models/tests";
import { Allergies, AllergiesList } from "./src/models/allergies";
import { Prescriptions, PrescriptionList } from "./src/models/prescriptions";
import { Patients } from "./src/models/patient";
import { Visits } from "./src/models/visits";
import { Doctors } from "./src/models/doctor";
import { Operators } from "./src/models/operators";

export default function TestingData() {
  BloodGroup.bulkCreate(bgjson);
  Tests.bulkCreate(testjson);
  Allergies.bulkCreate(allergiesjson);
  Prescriptions.bulkCreate(presjson);
  Patients.bulkCreate(patjson);
  Doctors.bulkCreate(docjson);
  Visits.bulkCreate(vis);
  PrescriptionList.bulkCreate(pljson);
  AllergiesList.bulkCreate(aljson);
  TestsList.bulkCreate(tljson);
  Operators.bulkCreate(opjson);
}
