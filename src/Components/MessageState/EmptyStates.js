import * as React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { Title, Button, Stack, StackItem } from '@patternfly/react-core';
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
} from '@patternfly/react-core/dist/js/components/EmptyState';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import { global_success_color_100 as globalSuccessColor100 } from '@patternfly/react-tokens/dist/js/global_success_color_100';
import { global_danger_color_100 as globalDangerColor100 } from '@patternfly/react-tokens/dist/js/global_danger_color_100';
import { InProgressIcon } from '@patternfly/react-icons/dist/js/icons/in-progress-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import { global_info_color_100 as globalInfoColor100 } from '@patternfly/react-tokens/dist/js/global_info_color_100.js';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import WrenchIcon from '@patternfly/react-icons/dist/js/icons/wrench-icon';

import DefaultErrorMessage from '@redhat-cloud-services/frontend-components/ErrorState/DefaultErrorMessage';

import MessageState from './MessageState';
import messages from '../../Messages';
import { BASE_PATH } from '../../Routes';

// Analogue for ErrorState from the frontend-components without the "Go to homepage" button
// TODO: update ErrorState from the frontend-components and remove custom error here
const ErrorState = () => {
  const intl = useIntl();
  return (
    <MessageState
      title={intl.formatMessage(messages.errorStateTitle)}
      text={
        <Stack>
          <StackItem>{intl.formatMessage(messages.errorStateBody)}</StackItem>
          <StackItem>
            <DefaultErrorMessage />
          </StackItem>
        </Stack>
      }
      icon={ExclamationCircleIcon}
      iconStyle={{ color: globalDangerColor100.value }}
    />
  );
};

const NoAffectedClusters = () => {
  const intl = useIntl();
  return (
    <MessageState
      title={intl.formatMessage(messages.noAffectedClustersTitle)}
      text={intl.formatMessage(messages.noAffectedClustersBody)}
      icon={CheckCircleIcon}
      iconStyle={{ color: globalSuccessColor100.value }}
    />
  );
};

const NoMatchingClusters = () => {
  const intl = useIntl();
  return (
    <MessageState
      title={intl.formatMessage(messages.noMatchingClustersTitle)}
      text={intl.formatMessage(messages.noMatchingClustersBody)}
    />
  );
};
// used in the recs list table: no filters match
const NoMatchingRecs = () => {
  const intl = useIntl();
  return (
    <MessageState
      title={intl.formatMessage(messages.noMatchingRecsTitle)}
      text={intl.formatMessage(messages.noMatchingRecsBody)}
    />
  );
};

// used in Routes.js to create custom message instead of <InvalidObject>

const ComingSoon = () => {
  const intl = useIntl();
  return (
    <EmptyState variant="small" id="coming-soon-message">
      <EmptyStateIcon icon={InProgressIcon} color="#151515" />
      <Title headingLevel="h2" size="2xl">
        {intl.formatMessage(messages.comingSoonTitle)}
      </Title>
      <EmptyStateBody>
        {intl.formatMessage(messages.comingSoonBody)}
      </EmptyStateBody>
      <Link to={`${BASE_PATH}/recommendations`}>
        <Button variant="primary">Recommendations</Button>
      </Link>
    </EmptyState>
  );
};

const NoRecsForClusters = () => {
  const intl = useIntl();
  return (
    <EmptyState variant="small">
      <EmptyStateIcon icon={PlusCircleIcon} />
      <Title headingLevel="h2" size="2xl">
        {intl.formatMessage(messages.noRecsForClusterListTitle)}
      </Title>
      <EmptyStateBody>
        {intl.formatMessage(messages.noRecsForClusterListBody)}
      </EmptyStateBody>
      <Button
        component="a"
        variant="primary"
        href="https://console.redhat.com/openshift/create"
      >
        Create cluster
      </Button>
      <EmptyStateSecondaryActions>
        <Button
          component="a"
          variant="link"
          href="https://console.redhat.com/openshift/register"
        >
          Register cluster
        </Button>
        <Button
          component="a"
          variant="link"
          href="https://console.redhat.com/openshift/assisted-installer/clusters"
        >
          Assisted Installer clusters
        </Button>
      </EmptyStateSecondaryActions>
    </EmptyState>
  );
};

const NoInsightsResults = () => {
  const intl = useIntl();
  return (
    <MessageState
      title={intl.formatMessage(messages.noRecsFoundError)}
      text={
        <React.Fragment>
          {intl.formatMessage(messages.noRecsFoundErrorDesc)}
          <a href="https://docs.openshift.com/container-platform/latest/support/getting-support.html">
            {' '}
            OpenShift documentation.
          </a>
        </React.Fragment>
      }
      icon={InfoCircleIcon}
      iconStyle={{
        color: globalInfoColor100.value,
      }}
      variant="large"
    />
  );
};

const NoRecsError = () => {
  const intl = useIntl();
  return (
    <MessageState
      title={intl.formatMessage(messages.noRecsError)}
      text={intl.formatMessage(messages.noRecsErrorDesc)}
      icon={ExclamationCircleIcon}
      iconStyle={{
        color: globalDangerColor100.value,
      }}
    />
  );
};

const NoRecsAffecting = () => {
  const intl = useIntl();
  return (
    <MessageState
      icon={CheckCircleIcon}
      iconStyle={{
        color: globalSuccessColor100.value,
      }}
      title={intl.formatMessage(messages.noRecommendations)}
      text={intl.formatMessage(messages.noRecommendationsDesc)}
    />
  );
};

const NoUpdateRisks = () => {
  const intl = useIntl();
  return (
    <MessageState
      icon={CheckCircleIcon}
      iconStyle={{
        color: globalSuccessColor100.value,
      }}
      title={intl.formatMessage(messages.noUpdateRisksFound)}
      text={intl.formatMessage(messages.noUpdateRisksFoundDesc)}
    />
  );
};

const UpdateRisksNotAvailable = () => {
  const intl = useIntl();
  return (
    <MessageState
      icon={ExclamationTriangleIcon}
      title={intl.formatMessage(messages.updateRisksNotAvailable)}
      text={intl.formatMessage(messages.updateRisksNotAvailableDesc)}
    />
  );
};

const NoRecsForWorkloads = () => {
  return (
    <MessageState
      icon={CheckCircleIcon}
      iconStyle={{
        color: globalSuccessColor100.value,
      }}
      title="No workload recommendations"
      text={
        <>
          <p>
            There are no workload-related recommendations for your clusters.
            This page only shows workloads if there are recommendations
            available.
          </p>
          <Button
            variant="primary"
            className="pf-v5-u-mt-xl"
            onClick={() => history.back()}
          >
            Return to previous page
          </Button>
        </>
      }
    />
  );
};

const NoWorkloadsAvailable = () => {
  return (
    <MessageState
      icon={WrenchIcon}
      title="Workloads data unavailable"
      text={
        <>
          <p>
            Verify that your clusters are connected and sending data to Red Hat,
            and that the Deployment Validation Operator is installed and
            configured.
          </p>
          <Button
            variant="primary"
            className="pf-v5-u-mt-xl"
            onClick={() => history.back()}
          >
            Return to previous page
          </Button>
          <br />
          <a
            className="pf-v5-u-display-inline-block pf-v5-u-mt-xl"
            href="https://docs.openshift.com/container-platform/latest/support/getting-support.html"
          >
            View documentation
          </a>
        </>
      }
    />
  );
};

// used in the workloads objects
const NoMatchingWorkloadsObjects = () => {
  return (
    <MessageState
      title={'No matching workloads found'}
      text={'To continue, edit your filter settings and search again.'}
    />
  );
};

const NoWorkloadsRecsAvailable = () => {
  return (
    <MessageState
      icon={ExclamationCircleIcon}
      iconStyle={{ color: globalDangerColor100.value }}
      title="Unable to connect"
      text={
        <>
          <p>Check your connection and reload the page.</p>
          <Button
            variant="primary"
            className="pf-v5-u-mt-xl"
            onClick={() => history.back()}
          >
            Return to previous page
          </Button>
          <br />
        </>
      }
    />
  );
};

const NoRecsForWorkloadsDetails = () => {
  return (
    <MessageState
      icon={CheckCircleIcon}
      iconStyle={{
        color: globalSuccessColor100.value,
      }}
      title="No workload recommendations"
      text={
        <>
          <p>There are no recommendations for this workload.</p>
          <Button
            variant="primary"
            className="pf-v5-u-mt-xl"
            onClick={() => history.back()}
          >
            Return to previous page
          </Button>
        </>
      }
    />
  );
};

const NoMatchingWorkloads = () => {
  return (
    <MessageState
      title={'No matching workloads found'}
      text={'To continue, edit your filter settings and search again.'}
    />
  );
};

const NoMatchingRecsForWorkloads = () => {
  return (
    <MessageState
      title={'No matching recommendations found'}
      text={'To continue, edit your filter settings and search again.'}
    />
  );
};

export {
  ErrorState,
  NoAffectedClusters,
  NoMatchingClusters,
  NoMatchingRecs,
  ComingSoon,
  NoRecsForClusters,
  NoInsightsResults,
  NoRecsError,
  NoRecsAffecting,
  NoUpdateRisks,
  UpdateRisksNotAvailable,
  NoRecsForWorkloads,
  NoWorkloadsAvailable,
  NoMatchingWorkloadsObjects,
  NoWorkloadsRecsAvailable,
  NoRecsForWorkloadsDetails,
  NoMatchingWorkloads,
  NoMatchingRecsForWorkloads,
};
