import { Page, VideoEntry } from "./model.ts";
import { VideoApi } from "./api.ts";

export const Api: VideoApi = {
  async getEntries() {
    await new Promise((r) => setTimeout(r, 1000));
    const entries: Page<VideoEntry>= {
      items: [
        {
          id: "bf6780f7-c15b-45ec-834c-068c783ab751",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T22:41:07.2666443Z"),
          updateTime: new Date("2022-06-03T22:42:09.2651189Z"),
          title:
            "Build Recap | The Newest Features from Azure Form Recognizer ",
          originalFileName: "20220510-FormReco-LuZhang.mp4",
          youTubeUrl: "https://youtu.be/o1dEJMoFeus",
          tempResources: [],
        },
        {
          id: "2d554213-3137-4d1a-8244-f00d59e3d2e7",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T22:33:37.5922524Z"),
          updateTime: new Date("2022-06-03T22:36:43.8368599Z"),
          title: "Debug Android Apps with WSA and Visual Studio 2022",
          originalFileName:
            "20220520_OnDotNet_DebugAndroidAppswithWSAandVisualStudio2022_edited.mp4",
          youTubeUrl: "https://youtu.be/ABua3pB3RGc",
          tempResources: [],
        },
        {
          id: "fe6afa6c-6cfa-4400-bf80-fd3212cc7d84",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T22:10:13.8087405Z"),
          updateTime: new Date("2022-06-03T22:14:14.789932Z"),
          title: "Let's Learn .NET: .NET MAUI",
          originalFileName:
            "Let's Learn .NET - .NET MAUI cross-platform apps in CSharp.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "4469cee7-8312-454e-83a0-d3e3088d5b4b",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T21:45:55.4000064Z"),
          updateTime: new Date("2022-06-03T21:47:10.7386027Z"),
          title:
            "Microsoft Identity | Next level security with secretless apps",
          originalFileName:
            "20220426_DevOpsLab_MicrosoftIdentity_Nextlevelsecuritywithsecretlessapps_edited (1).mp4",
          youTubeUrl: "https://youtu.be/W8WXnDHITbY",
          tempResources: [],
        },
        {
          id: "a739e5cb-539a-4edf-83fa-5230de405766",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T21:40:18.9141156Z"),
          updateTime: new Date("2022-06-03T21:41:48.9666296Z"),
          title: "Ask the Expert: Create Apps with Ampere-based Azure VMs",
          originalFileName:
            "20220602_AskTheExpert_CreateAppswithAmperebasedAzureVMs_edited.mp4",
          youTubeUrl: "https://www.youtube.com/watch?v=SKug49tmStA",
          tempResources: [],
        },
        {
          id: "4c8fcda4-5640-43b3-8eec-acaa45f68d30",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T21:36:23.5164499Z"),
          updateTime: new Date("2022-06-03T21:39:29.8654591Z"),
          title:
            "Learn Live - FastTrack for Azure Ep01 Modern Data Warehouse - Designing, making & operating",
          originalFileName:
            "20220601_LearnLive_ModernDataWarehouse_Designingmakingandoperating_edited.mp4",
          youTubeUrl: "https://www.youtube.com/watch?v=ui8r3IUdXFY",
          tempResources: [],
        },
        {
          id: "11941d5a-f850-487a-a31c-32b0e53b0a8b",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T20:50:52.4546291Z"),
          updateTime: new Date("2022-06-03T20:51:41.7805014Z"),
          title:
            "DDI Labs and Azure IoT Central bring Vision AI to the next level",
          originalFileName:
            "20220421-TheIoTShow-DDI Labs and Azure IoT Central bring Vision AI to the next level_edited.mp4",
          youTubeUrl: "https://youtu.be/0rIaGW3blYw",
          tempResources: [],
        },
        {
          id: "88dae25b-654b-467d-bbb7-8734da5e3cdd",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
            {
              id: "c192224d-9c92-434d-8648-90c013e60624",
              email: "Olivier.Bloch@microsoft.com",
              name: "Olivier Bloch",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T20:44:43.0196914Z"),
          updateTime: new Date("2022-06-03T20:45:19.5261016Z"),
          title:
            "IT/OT Data Integration with Azure Digital Twins, Azure Data Explorer, and Azure Synapse",
          originalFileName:
            "20220526_IOTSHOW_IT-OTDataIntegrationwithAzureDigitalTwinsAzureDataExplorerandAzureSynapse_edited_V4.mp4",
          youTubeUrl: "https://youtu.be/9IcbNcibAKI",
          tempResources: [],
        },
        {
          id: "febe2f82-4705-4759-b02f-364e0e6c9b4b",
          owners: [
            {
              id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
              email: "kimspilker@microsoft.com",
              name: "KimS",
            },
            {
              id: "b7dd8a74-95b4-4694-a9d2-d3c9a25bbfe2",
              email: "allyhopkins@microsoft.com",
              name: "Ally Hopkins",
            },
          ],
          createdBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          updatedBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          createTime: new Date("2022-06-03T19:20:46.5603214Z"),
          updateTime: new Date("2022-06-03T19:24:34.4625272Z"),
          title: "Exam Prep AZ-104 Group 5",
          originalFileName: "ExamPrepAZ104Group5.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "ee09f9e3-2f4a-41a2-ae96-6be48e182b46",
          owners: [
            {
              id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
              email: "kimspilker@microsoft.com",
              name: "KimS",
            },
            {
              id: "b7dd8a74-95b4-4694-a9d2-d3c9a25bbfe2",
              email: "allyhopkins@microsoft.com",
              name: "Ally Hopkins",
            },
          ],
          createdBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          updatedBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          createTime: new Date("2022-06-03T19:20:18.5805044Z"),
          updateTime: new Date("2022-06-03T19:24:17.4727894Z"),
          title: "Exam Prep AZ-104 Group 4",
          originalFileName: "ExamPrepAZ104Group4.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "f2cf8038-e86f-4da9-8762-88541a7e1cb4",
          owners: [
            {
              id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
              email: "kimspilker@microsoft.com",
              name: "KimS",
            },
            {
              id: "b7dd8a74-95b4-4694-a9d2-d3c9a25bbfe2",
              email: "allyhopkins@microsoft.com",
              name: "Ally Hopkins",
            },
          ],
          createdBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          updatedBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          createTime: new Date("2022-06-03T19:19:29.5961375Z"),
          updateTime: new Date("2022-06-03T19:22:20.8159067Z"),
          title: "Exam Prep AZ-104 Group 3",
          originalFileName: "ExamPrepAZ104Group3.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "7923d899-2ddc-43d0-9b3e-9feac93394ca",
          owners: [
            {
              id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
              email: "kimspilker@microsoft.com",
              name: "KimS",
            },
            {
              id: "b7dd8a74-95b4-4694-a9d2-d3c9a25bbfe2",
              email: "allyhopkins@microsoft.com",
              name: "Ally Hopkins",
            },
          ],
          createdBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          updatedBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          createTime: new Date("2022-06-03T19:17:16.8404234Z"),
          updateTime: new Date("2022-06-03T19:18:56.3279281Z"),
          title: "Exam Prep AZ-104 Group 2",
          originalFileName: "ExamPrepAZ104Group2.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "b646bcc3-54e9-4b90-8cba-7c001132015e",
          owners: [
            {
              id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
              email: "kimspilker@microsoft.com",
              name: "KimS",
            },
            {
              id: "b7dd8a74-95b4-4694-a9d2-d3c9a25bbfe2",
              email: "allyhopkins@microsoft.com",
              name: "Ally Hopkins",
            },
          ],
          createdBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          updatedBy: {
            id: "86ba5684-b218-4e39-a9d5-312db3db8b50",
            email: "kimspilker@microsoft.com",
            name: "KimS",
          },
          createTime: new Date("2022-06-03T19:08:43.7819027Z"),
          updateTime: new Date("2022-06-03T19:16:09.7213805Z"),
          title: "Exam Prep AZ-104 Group 1",
          originalFileName: "ExamPrepAZ104Group1.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "b63c2133-714a-48d7-9689-2120553664d4",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          publishedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-03T16:47:02.6713331Z"),
          updateTime: new Date("2022-06-03T16:48:10.2704138Z"),
          publishTime: new Date("2022-06-03T19:04:38.8176514Z"),
          title:
            "The Download: Maintainer Month, .NET MAUI Goes GA, Flight Simulator: Top Gun, and more",
          originalFileName: "TheDownload_E16V1.mp4",
          youTubeUrl: "https://youtu.be/FdkSTzp_NTY",
          tempResources: [],
        },
        {
          id: "645dc1ac-d521-4093-b290-c553d250f2a4",
          owners: [
            {
              id: "d20ae37f-f12d-416b-bddc-cdff245918d8",
              email: "kamckinn@microsoft.com",
              name: "Kaitlin",
            },
          ],
          createdBy: {
            id: "d20ae37f-f12d-416b-bddc-cdff245918d8",
            email: "kamckinn@microsoft.com",
            name: "Kaitlin",
          },
          updatedBy: {
            id: "d20ae37f-f12d-416b-bddc-cdff245918d8",
            email: "kamckinn@microsoft.com",
            name: "Kaitlin",
          },
          createTime: new Date("2022-06-03T01:38:19.1323436Z"),
          updateTime: new Date("2022-06-03T19:47:35.1548989Z"),
          title: "Build native apps for any device with .NET and Visual Studio",
          originalFileName: "BRK03_v2.mp4",
          youTubeUrl: "https://youtu.be/n6XeGNG13Io",
          tempResources: [],
        },
        {
          id: "e98f1d69-38b3-4db1-903f-190f2c045bd1",
          owners: [
            {
              id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
              email: "v-tracymyles@microsoft.com",
              name: "v-tracymyles",
            },
          ],
          createdBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          updatedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          createTime: new Date("2022-06-02T20:13:55.0434971Z"),
          updateTime: new Date("2022-06-02T20:40:28.5550098Z"),
          title:
            "Learn Live - Use Bicep to deploy your Azure infrastructure as code Ep11 Review Azure infrastructure changes by using Bicep and pull requests",
          originalFileName:
            "20220531_LearnLive_ReviewAzureinfrastructurechangesbyusingBicep_edited.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "93dbb945-1f3a-487e-92fe-d437f53cedf9",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          publishedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-02T20:03:39.0762556Z"),
          updateTime: new Date("2022-06-02T20:06:04.7131782Z"),
          publishTime: new Date("2022-06-03T20:35:05.4327355Z"),
          title:
            "LunchBytes Series 1 Episode 4: Microsoft Build 2022 Recap with Panel",
          originalFileName:
            "LunchBytes S1E4 Microsoft Build 2022 Recap and Panel.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "79f69cee-ae56-4ce3-9443-0f45e5c3ccf4",
          owners: [
            {
              id: "fb19175c-fe01-40f1-91ab-01478c02e7a3",
              email: "elkrieger@microsoft.com",
              name: "Elazar Krieger",
            },
          ],
          createdBy: {
            id: "fb19175c-fe01-40f1-91ab-01478c02e7a3",
            email: "elkrieger@microsoft.com",
            name: "Elazar Krieger",
          },
          updatedBy: {
            id: "fb19175c-fe01-40f1-91ab-01478c02e7a3",
            email: "elkrieger@microsoft.com",
            name: "Elazar Krieger",
          },
          createTime: new Date("2022-06-02T13:12:43.3525732Z"),
          updateTime: new Date("2022-06-02T13:16:42.1829499Z"),
          title: "Defender for Storage | Defender for Cloud in the Field #13",
          originalFileName: "Episode13.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "82bec975-2790-4a8a-8ece-cc3132536385",
          owners: [
            {
              id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
              email: "v-tracymyles@microsoft.com",
              name: "v-tracymyles",
            },
          ],
          createdBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          updatedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          publishedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          createTime: new Date("2022-06-01T21:50:12.7490648Z"),
          updateTime: new Date("2022-06-01T21:51:18.8460063Z"),
          publishTime: new Date("2022-06-02T20:11:22.7114998Z"),
          title: "Learn Live - Post-Build 2022 Ep01 Manage tables in Dataverse",
          originalFileName:
            "20220531_LearnLive_ManagetablesinDataverse_edited.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "b0c19f33-74ae-4904-b9a5-b55d4924368d",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          publishedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-01T21:23:33.6585245Z"),
          updateTime: new Date("2022-06-01T21:29:24.6483956Z"),
          publishTime: new Date("2022-06-02T21:11:05.1850316Z"),
          title:
            "The Evolution of Power Virtual Agents - Taking Fusion Teams to the Next Level",
          originalFileName:
            "20220506_LowCodeRevolution_EmpoweringFusionTeamswithPowerVirtualAgents_edited.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "f3227460-4a9c-4aae-9462-069c55113fc9",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          publishedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-01T21:17:57.6583506Z"),
          updateTime: new Date("2022-06-01T21:19:10.0127618Z"),
          publishTime: new Date("2022-06-02T21:03:36.8610328Z"),
          title: "Ask the Expert: Build Modern Apps with Azure Front Door",
          originalFileName:
            "20220531_AsktheExpert_BuildModernAppswithAzureFrontDoor_edited.mp4",
          youTubeUrl: "https://www.youtube.com/watch?v=strVFJmihlY",
          tempResources: [],
        },
        {
          id: "75cef8c1-0330-4701-a3e0-004a2f0604fa",
          owners: [
            {
              id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
              email: "v-mleib@microsoft.com",
              name: "Matthew Leib",
            },
          ],
          createdBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          updatedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          publishedBy: {
            id: "7a0e26ea-4dcb-4059-b852-8aca275d82e0",
            email: "v-mleib@microsoft.com",
            name: "Matthew Leib",
          },
          createTime: new Date("2022-06-01T20:59:56.4943069Z"),
          updateTime: new Date("2022-06-02T21:16:12.8230513Z"),
          publishTime: new Date("2022-06-02T21:16:20.3938033Z"),
          title:
            "Build Recap | What’s new in Azure Machine Learning Automated ML",
          originalFileName: "20220517-AutoML-Cesar.mp4",
          youTubeUrl: "https://youtu.be/tXrDscVaF4Q",
          tempResources: [],
        },
        {
          id: "6ddcb3b6-e2d3-4140-abc8-228056683f53",
          owners: [
            {
              id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
              email: "v-tracymyles@microsoft.com",
              name: "v-tracymyles",
            },
          ],
          createdBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          updatedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          publishedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          createTime: new Date("2022-06-01T18:28:41.8568892Z"),
          updateTime: new Date("2022-06-01T20:01:12.8766047Z"),
          publishTime: new Date("2022-06-01T23:10:37.606491Z"),
          title:
            ".NET MAUI Resources & Beginner Series Recap [8 of 8] | .NET MAUI for Beginners",
          originalFileName: "BS_dotNetMaui_08_ResourcesRecap.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "191b4b1e-f51b-4173-817d-cac256cc15e0",
          owners: [
            {
              id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
              email: "v-tracymyles@microsoft.com",
              name: "v-tracymyles",
            },
          ],
          createdBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          updatedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          publishedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          createTime: new Date("2022-06-01T18:28:23.0171994Z"),
          updateTime: new Date("2022-06-01T19:58:38.4234441Z"),
          publishTime: new Date("2022-06-01T23:10:28.8539547Z"),
          title:
            "Accessing Platform Features in .NET MAUI [7 of 8] | .NET MAUI for Beginners",
          originalFileName: "BS_dotNetMaui_07_platformFeatures.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
        {
          id: "f88fc34b-1745-4ede-9906-5cf1870c19e3",
          owners: [
            {
              id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
              email: "v-tracymyles@microsoft.com",
              name: "v-tracymyles",
            },
          ],
          createdBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          updatedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          publishedBy: {
            id: "9a070c7e-6277-43e4-8980-4ccd1fbc24ee",
            email: "v-tracymyles@microsoft.com",
            name: "v-tracymyles",
          },
          createTime: new Date("2022-06-01T17:01:04.756982Z"),
          updateTime: new Date("2022-06-01T17:01:29.3577991Z"),
          publishTime: new Date("2022-06-02T01:32:51.9979364Z"),
          title:
            "Navigating Between Pages in .NET MAUI [6 of 8] | .NET MAUI for Beginners",
          originalFileName: "BS_dotNetMaui_06_navigating.mp4",
          youTubeUrl: "",
          tempResources: [],
        },
      ],
      pageIndex: 1,
      pageSize: 25,
      totalCount: 22504,
    };

    return entries;
  },
};