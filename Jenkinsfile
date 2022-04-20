pipeline {
 enviroment {
  dockerimagername = "mohamedamineblibech/crudapp"
  dockerImage = ""
}

agent any

stages {
  stage('checkout source') {
    steps {
      git 'https://github.com/med363/crud-users-tutorial'
    }
  }
  
  stage('Build image') {
    steps{
      script {
        dockerImage = docker build dockerimagename
      }
     }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'mohamedamineblibech'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("1.1.1")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
        