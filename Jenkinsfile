pipeline {
      environment {
	registryCredential = 'dockerhublogin'
          }

agent any

stages {
  stage('checkout source') {
             steps{
                git url:'https://github.com/med363/crud-users-tutorial.git', branch:'main'
             }
  }
  
  //stage('Build image') {
  //  steps{
  //    script {
  //      dockerImage = docker.build dockerimagename
  //    }
  //   }
  //  }

 //   stage('Pushing Image') {
 //     environment {
 //              registryCredential = 'dockerhublogin'
 //          }
//      steps{
//        script {
//          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
//            dockerImage.push("1.1.1")
//          }
//        }
//      }
//    }
 
 
		stage('Build image') {

			steps {
				sh 'docker build -t mohamedamineblibech/crudapp:1.1.1 .'
			}
		}

		stage('Login to docker hub account') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push image into docker hub') {

			steps {
				sh 'docker push mohamedamineblibech/crudapp:1.1.1'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
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
        
