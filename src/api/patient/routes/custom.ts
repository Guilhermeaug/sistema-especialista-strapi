export default {
  routes: [
    {
      method: 'GET',
      path: '/patients/:title/evaluation',
      handler: 'patient.findEvaluation',
    },
    {
      method: 'GET',
      path: '/patients/:title/diagnostic',
      handler: 'patient.findDiagnostic',
    },
    {
      method: 'GET',
      path: '/patients/:title/therapeutic',
      handler: 'patient.findTherapeutic',
    }
  ]
}