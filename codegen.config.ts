import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["src/schema"],

  generates: {
    "src/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],

      config: {
        enumsAsTypes: true,
        optionalInfoArgument: true,
        mappers: {
          blood_group: "src/models/blood_group#BloodGroup",
          allergy: "src/models/allergies#Allergies",
          patient_allergy: "src/models/allergies#AllergiesList",
          prescription: "src/models/prescriptions#Prescription",
          patient_prescription: "src/models/prescriptions#PrescriptionList",
          doctor: "src/models/doctor#Doctors",
          test: "src/models/tests#Tests",
          patient_test: "src/models/tests#TestsList",
          visit: "src/models/visits#Visits",
          patient: "src/models/patient#Patient",
          user: "src/models/user#Users",
        },
        useTypeImports: true,
      },
    },
  },
};

export default config;
