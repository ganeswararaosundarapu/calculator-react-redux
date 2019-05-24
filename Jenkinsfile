pipeline {
  agent any
  stages {
    stage('Dev') {
      parallel {
        stage('Dev') {
          steps {
            echo 'Dev execution started'
            sleep(unit: 'SECONDS', time: 2)
          }
        }
        stage('Stage') {
          steps {
            echo 'Stage execution starts'
          }
        }
      }
    }
  }
  environment {
    appName = 'calculator'
  }
}